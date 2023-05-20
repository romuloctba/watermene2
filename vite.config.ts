import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.png'],
        manifest: {
            name: 'Watermene V2',
            short_name: 'Watermene',
            description: 'Add watermark to your menes!',
            theme_color: '#222222',
            icons: [
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png'
            },
            ]
        }
    })],
});