/**
 * Reports CSS properties known to `web-features` that are missing from
 * `groups.js`, grouped by Baseline level and annotated with the spec module
 * each property comes from.
 *
 * Modelled on the ESLint CSS plugin's baseline generator.
 * @see https://github.com/eslint/css/blob/main/tools/generate-baseline.js
 */

import { features } from 'web-features'

import propertyGroups from '../groups.js'

/**
 * Matches bare property keys like `css.properties.color`, but not value
 * sub-features like `css.properties.align-self.position_absolute_context`.
 */
const PROPERTY_PATTERN = /^css\.properties\.(?<property>[a-zA-Z$\d-]+)$/u

/** A BCD pseudo-key for `--*` declarations, not a real property name. */
const NOT_A_PROPERTY = new Set(['custom-property'])

/** Used to pick the best status when a property appears in several features. */
const LEVEL_RANK = { high: 3, low: 2, false: 1 }

const LEVEL_HEADINGS = {
	high: 'Baseline high',
	low: 'Baseline low',
	false: 'Not baseline',
}

/**
 * Reduces a spec URL to its module name.
 * @param {string[] | undefined} spec The feature's spec URLs.
 * @returns {string} The spec module name, or an empty string if unknown.
 */
function getSpecModule(spec) {
	let [url] = spec ?? []
	if (!url) return ''

	try {
		let { hostname, pathname } = new URL(url)
		let segments = pathname.split('/').filter(Boolean)

		return segments.at(-1) ?? hostname
	} catch {
		return ''
	}
}

/**
 * Collects every CSS property in the `web-features` data, keeping the highest
 * Baseline status when a property is described by more than one feature.
 * @returns {Map<string, { level: string, specModule: string, date: string }>}
 */
function collectBaselineProperties() {
	/** @type {Map<string, { level: string, specModule: string, date: string }>} */
	let properties = new Map()

	for (let feature of Object.values(features)) {
		// Skip `moved` and `split` redirect records.
		if (feature.kind && feature.kind !== 'feature') continue
		if (!feature.compat_features) continue

		for (let key of feature.compat_features) {
			let match = PROPERTY_PATTERN.exec(key)
			if (!match) continue

			let { property } = match.groups
			if (NOT_A_PROPERTY.has(property)) continue

			let status = feature.status?.by_compat_key?.[key] ?? feature.status
			if (!status) continue

			let level = String(status.baseline)
			let existing = properties.get(property)
			if (existing && LEVEL_RANK[level] <= LEVEL_RANK[existing.level]) {
				continue
			}

			properties.set(property, {
				level,
				specModule: getSpecModule(feature.spec),
				date: status.baseline_low_date ?? '',
			})
		}
	}

	return properties
}

function report() {
	let knownProperties = new Set(
		propertyGroups.flatMap((group) => group.properties),
	)
	let baselineProperties = collectBaselineProperties()
	let missing = [...baselineProperties].filter(
		([property]) => !knownProperties.has(property),
	)

	console.log(
		`${missing.length} of ${baselineProperties.size} baseline CSS properties missing from groups.js`,
	)

	let nameWidth = Math.max(...missing.map(([property]) => property.length), 0)
	let specWidth = Math.max(
		...missing.map(([, info]) => info.specModule.length),
		0,
	)

	for (let level of ['high', 'low', 'false']) {
		let entries = missing
			.filter(([, info]) => info.level === level)
			.sort(
				([nameA, infoA], [nameB, infoB]) =>
					infoA.specModule.localeCompare(infoB.specModule) ||
					nameA.localeCompare(nameB),
			)

		console.log(`\n## ${LEVEL_HEADINGS[level]} (${entries.length})`)

		for (let [property, info] of entries) {
			let columns = [
				property.padEnd(nameWidth),
				info.specModule.padEnd(specWidth),
				info.date,
			]

			console.log(`  ${columns.join('  ').trimEnd()}`)
		}
	}
}

report()
