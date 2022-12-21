const propertyGroups = require('./groups.js')

module.exports = {
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-order': propertyGroups,
	},
}
