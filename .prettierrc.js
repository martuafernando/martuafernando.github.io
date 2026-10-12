// Source files are tab-indented; JSON, Markdown and YAML stay on spaces.
export default {
	plugins: ["prettier-plugin-tailwindcss"],
	useTabs: true,
	overrides: [
		{
			files: ["*.json", "*.md", "*.yml", "*.yaml"],
			options: { useTabs: false },
		},
	],
};
