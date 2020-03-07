const { types, defaultScopes } = require('./common');

const scopeOverrides = types.reduce(((collector, type) => {
	const overrides = type.scopeOverrides || [];
	if (overrides.length > 0) {
		collector[type.value] = overrides;
	}

	return collector;
}), {});

module.exports = {
	types: types
		.filter((type) => type.showInPrompt)
		.map((type) => ({ value: type.value, name: type.name })),
	scopes: defaultScopes,
	scopeOverrides: scopeOverrides,
	allowCustomScopes: true,
	allowBreakingChanges: types
		.filter((type) => type.allowBreakingChanges)
		.map(type => type.value),
};
