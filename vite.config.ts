import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/QRCode_Generator/",
  server:{
    host:true,
    strictPort:false,
  }
})
