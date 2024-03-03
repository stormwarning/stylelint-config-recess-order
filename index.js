import propertyGroups from './groups.js'

const config = {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': propertyGroups,
	},
}

export default config
