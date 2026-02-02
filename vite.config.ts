import react from '@vitejs/plugin-react-swc';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	if (!env.VITE_API_PREFIX) {
		throw new Error('VITE_API_PREFIX is required but not defined');
	}

	if (!env.VITE_BACKEND_URL) {
		throw new Error('VITE_BACKEND_URL is required but not defined');
	}

	return {
		plugins: [react(), svgr()],
		resolve: {
			alias: {
				'@app': resolve(__dirname, './src/app'),
				'@entities': resolve(__dirname, './src/entities'),
				'@features': resolve(__dirname, './src/features'),
				'@pages': resolve(__dirname, './src/pages'),
				'@shared': resolve(__dirname, './src/shared'),
				'@widgets': resolve(__dirname, './src/widgets'),
			},
		},
		server: {
			proxy: {
				[env.VITE_API_PREFIX]: {
					target: env.VITE_BACKEND_URL,
					changeOrigin: true,
					secure: false,
				},
			},
		},
	};
});
