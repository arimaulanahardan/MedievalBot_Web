import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    Sitemap({
      // basePath: 'https://forgebot.io',
      hostname: 'https://forgebot.io',
      exclude: ['/404', '/admin', '/private'],
      changefreq: 'weekly',
      generateRobotsTxt: true,
      dynamicRoutes: [
        '/',
        '/#home',
        '/#services',
        '/#about%20us',
        '/#Testimonial',
        '/term&condition',
      ]
    })
  ],
})
