import test from 'ava'
import stylelint from 'stylelint'

import config from '../index.js'

import { correctOrder, incorrectOrder } from './_fixtures.js'

const runStylelint = async (code) => {
	let data = await stylelint.lint({
		code,
		config,
	})

	return data.results[0]
}

test('with incorrect property order', async (t) => {
	let output = await runStylelint(incorrectOrder)

	t.truthy(output.errored, 'indicates linting errors')
	t.is(
		output.warnings[0].text.trim(),
		'Expected "box-sizing" to come before "background-color" (order/properties-order)',
		'indicates a properties-order error',
	)
})

test('with correct property order', async (t) => {
	let output = await runStylelint(correctOrder)

	t.falsy(output.errored, 'indicates no errors')
	t.is(output.warnings.length, 0)
})
