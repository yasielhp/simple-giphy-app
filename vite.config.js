import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://yasielken.github.io/Simple-Giphy-App/",
  plugins: [react()]
})
