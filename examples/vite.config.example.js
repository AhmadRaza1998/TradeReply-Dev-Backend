import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { promises as fs } from 'fs';

dotenv.config({ path: resolve(__dirname, '.env') });

console.log('VITE_APP_URL from dotenv:', process.env.VITE_APP_URL);

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx', // Main JavaScript entry
                'resources/js/ssr.jsx', // Server-side rendering
            ],
            refresh: true, // Enables hot reloading
        }),
        react(),
        {
            name: 'move-manifest',
            async writeBundle(options) {
                const manifestPath = resolve(options.dir, '.vite/manifest.json');
                const targetPath = resolve(options.dir, 'manifest.json');
                const viteDir = resolve(options.dir, '.vite');

                try {
                    await fs.rename(manifestPath, targetPath);
                    console.log(`Moved manifest.json to ${targetPath}`);
                } catch (err) {
                    console.warn(`Manifest not found at ${manifestPath}: ${err.message}`);
                }

                try {
                    const files = await fs.readdir(viteDir);
                    if (files.length === 0) {
                        await fs.rmdir(viteDir);
                        console.log(`Removed empty .vite/ directory at ${viteDir}`);
                    }
                } catch (err) {
                    console.warn(`Failed to clean up .vite/ directory: ${err.message}`);
                }
            },
        },
        {
            name: 'debug-output',
            generateBundle(_, bundle) {
                console.log('Generated Files:', Object.keys(bundle)); // Logs all files generated by Vite
            },
        },
    ],
    css: {
        extract: true, // Ensure CSS is extracted into its own file
    },
    build: {
        outDir: '../backend/public/build', // Assets output directory
        emptyOutDir: true, // Clean the output directory before building
        manifest: true, // Generate manifest.json
        rollupOptions: {
            input: {
                app: 'resources/js/app.jsx', // Main entry file
				appStyles: 'resources/css/app.scss', // Ensure SCSS is treated as an entry
            },
            output: {
                entryFileNames: ({ name }) => {
                    if (name === 'app') return '[name].js'; // Place app.js in build/
                    return 'js/[name].js'; // Other JS files in build/js/
                },
                chunkFileNames: 'js/[name].js', // JavaScript chunks in js/
                assetFileNames: ({ name }) => {
                    if (name === 'app.css') {
                        return '[name].css'; // Place app.css in build/
                    }
                    if (name && /\.(png|jpe?g|gif|svg)$/.test(name)) {
                        return 'images/[name].[ext]'; // Images in images/
                    }
                    if (name && /\.(woff2?|ttf|eot)$/.test(name)) {
                        return 'fonts/[name].[ext]'; // Fonts in fonts/
                    }
                    return 'assets/[name].[ext]'; // Other assets in assets/
                },
            },
            treeshake: {
                moduleSideEffects: ['*.scss', '*.css'], // Prevent tree-shaking of SCSS and CSS files
            },
        },
    },
    publicDir: 'public', // Static assets folder
    server: {
        host: '127.0.0.1',
        port: 5173, // Dev server port
        proxy: {
            '/': 'http://127.0.0.1:8000', // Laravel backend
        },
    },
});
