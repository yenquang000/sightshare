import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Bump the "r2" tag to force fresh asset URLs if a CDN ever caches a bad copy.
        entryFileNames: "assets/[name]-[hash]-r2.js",
        chunkFileNames: "assets/[name]-[hash]-r2.js",
        assetFileNames: "assets/[name]-[hash]-r2[extname]",
      },
    },
  },
})
