import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/editor/css/simditor.css',
                'resources/editor/js/module.js',
                'resources/editor/js/hotkeys.js',
                'resources/editor/js/uploader.js',
                'resources/editor/js/simditor.js',
            ],
            refresh: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true // 隐藏依赖项的警告
            }
        }
    }
});
