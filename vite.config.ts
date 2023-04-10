import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
	plugins: [react(), ViteMinifyPlugin()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 80,
	},
	preview: {
		host: true,
		strictPort: true,
		port: 80,
	},
});
