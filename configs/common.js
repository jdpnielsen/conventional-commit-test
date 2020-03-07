const defaultScopes = [
	{ name: 'example-1', },
	{ name: 'example-2' },
];

const types = [
	{
		value: 'feat',
		name: 'feat:     A new feature',
		allowBreakingChanges: true,
		showInPrompt: true,
		changelog: {
			section: 'Features',
		}
	},
	{
		value: 'fix',
		name: 'fix:      A bug fix',
		allowBreakingChanges: true,
		showInPrompt: true,
		changelog: {
			section: 'Bug Fixes',
		},
		scopeOverrides: [
			...defaultScopes,
			{ name: 'merge' },
			{ name: 'style' },
			{ name: 'e2eTest' },
			{ name: 'unitTest' }
		],
	},
	{
		value: 'docs',
		name: 'docs:     Documentation only changes',
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'style',
		name: `style:    Changes that do not affect the meaning of the code
            (white-space, formatting, missing semi-colons, etc)`,
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'refactor',
		name: 'refactor: A code change that neither fixes a bug nor adds a feature',
		allowBreakingChanges: true,
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'perf',
		name: 'perf:     A code change that improves performance',
		allowBreakingChanges: true,
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'test',
		name: 'test:     Adding missing tests',
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'chore',
		name: `chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation`,
		showInPrompt: true,
		changelog: {
			section: 'Misc',
		},
	},
	{
		value: 'revert',
		name: 'revert:   Revert to a commit',
		showInPrompt: true,
		changelog: {
			hidden: true,
		},
	},
	{
		value: 'release',
		name: 'release: A commit for updating version number and changelog',
		showInPrompt: false,
		changelog: {
			hidden: true,
		},
	},
];

module.exports = {
	types,
	defaultScopes,
}
