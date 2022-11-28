import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www');
import svgr from 'vite-plugin-svgr';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [reactRefresh(), svgr()],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            // "@import './src/css/commons/_media_query.scss';@import './src/css/commons/_variables.scss';",
          ]
        }
      }
    },
    resolve: {
      alias: {
        '@': SRC_DIR
      }
    },
    server: {
      host: true
    }
  });
};
