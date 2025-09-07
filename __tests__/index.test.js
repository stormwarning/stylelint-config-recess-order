import assert from 'node:assert/strict'
import { test } from 'node:test'

import stylelint from 'stylelint'

import groups from '../groups.js'
import config from '../index.js'
import { correctOrder, incorrectOrder } from './_fixtures.js'

const runStylelint = async (code) => {
	let data = await stylelint.lint({
		code,
		config,
	})

	return data.results[0]
}

test('with incorrect property order', async () => {
	let output = await runStylelint(incorrectOrder)

	assert.ok(output.errored, 'it indicates linting errors')
	assert.strictEqual(
		output.warnings[0].text.trim(),
		'Expected "box-sizing" to come before "background-color" (order/properties-order)',
		'it indicates a properties-order error',
	)
})

test('with correct property order', async () => {
	let output = await runStylelint(correctOrder)

	assert.ok(!output.errored, 'it indicates no linting errors')
	assert.strictEqual(
		output.warnings.length,
		0,
		'it indicates no specific errors',
	)
})

test('no duplicate properties', async () => {
	let propertiesArray = groups.flatMap((group) => group.properties)
	let propertiesSet = new Set(propertiesArray)

	assert.strictEqual(propertiesArray.length, propertiesSet.size)
})
