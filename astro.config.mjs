// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base: "/",

  image: {
    service: passthroughImageService(),
    domains: ['res.cloudinary.com'],
    remotePatterns: [{ protocol: 'https' }]
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      weights: [400, 500, 700]
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-sans",
      weights: [400, 600, 700],
      fallbacks: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    {
      provider: fontProviders.google(),
      name: "Noto Serif",
      cssVariable: "--font-serif",
      weights: [400, 700],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: [400, 700]
    }
  ],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },
});