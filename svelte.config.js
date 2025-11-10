import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Alias - Shortcuts for folders
		alias: {
			$assets: './src/assets', // Folder for pictures and other static files
			$components: './src/components' // Parts of the websits
		}
	}
};

export default config;
