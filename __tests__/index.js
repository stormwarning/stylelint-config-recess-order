import test from 'ava'
import stylelint from 'stylelint'

import config from '..'

const runStylelint = async (code) => {
    const data = await stylelint.lint({
        code,
        config,
    })

    return data.results
}

test('property order enforced', async (t) => {
    await runStylelint(`
        div {
            display: block;
            position: relative;
        }
    `).then(([output]) => {
        t.is(output.errored, true)
        t.is(
            output.warnings[0].text,
            'Expected "position" to come before "display" (order/properties-order)',
        )
    })
})
