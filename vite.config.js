import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'kNotes',  // Updated app name
        short_name: 'kNotes',  // Updated short name
        description: 'A simple note-taking app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/knotes_pwa/pwa-192x192.png',  // Use repo path for GitHub Pages
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/knotes_pwa/pwa-512x512.png',  // Use repo path for GitHub Pages
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/knotes_pwa/',  // This is required for GitHub Pages to serve the correct paths
});
