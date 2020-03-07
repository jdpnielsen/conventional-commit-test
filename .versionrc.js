const { types } = require('./configs/common.js');

module.exports = {
	"types": types.map((each) => {
		const { section, hidden } = each.changelog || {};
		const type = { type: each.value, section, hidden };

		return type;
	}),
	releaseCommitMessageFormat: 'release: {{currentTag}}',
};
