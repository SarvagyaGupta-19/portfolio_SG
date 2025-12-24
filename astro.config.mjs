// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://sarvagyagupta.com',
  base: '/',
  trailingSlash: 'ignore',
  
  // Disable dev toolbar
  devToolbar: {
    enabled: false,
  },
  
  // Build optimization
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  
  // Compression and optimization
  compressHTML: true,
  
  // Security headers
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  },
  
  vite: {
    plugins: [tailwindcss()],
    
    // Build optimization
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro'],
          },
        },
      },
    },
    
    // Performance optimization
    optimizeDeps: {
      include: [],
    },
  },
});
