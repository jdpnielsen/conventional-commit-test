/* eslint-env node */

const { types } = require('./common');
const { scopes, allowCustomScopes } = require('./commitizen.config');

const validTypes = types.map((type) => type.value);
const validScopes = scopes.map((scope) => scope.name);
const scopeValidationLevel = allowCustomScopes ? 1 : 2;

module.exports = {
	extends: ['@commitlint/config-conventional'],

	// Add your own rules. See http://marionebl.github.io/commitlint
	rules: {
		// Apply valid scopes and types
		'scope-enum': [scopeValidationLevel, 'always', validScopes],
		'type-enum': [2, 'always', validTypes]
	}
};
