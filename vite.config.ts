import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': resolve(__dirname, './src/app'),
			'@pages': resolve(__dirname, './src/pages'),
			'@widgets': resolve(__dirname, './src/widgets'),
			'@features': resolve(__dirname, './src/features'),
			'@entities': resolve(__dirname, './src/entities'),
			'@shared': resolve(__dirname, './src/shared'),
		},
	},
});
