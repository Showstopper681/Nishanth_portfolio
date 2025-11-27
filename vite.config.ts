import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Allows using REACT_APP_ prefix for environment variables to be compatible with existing setup
  envPrefix: 'REACT_APP_',
  build: {
    outDir: 'dist', // Standard Vite output directory expected by Vercel
  },
  server: {
    port: 3000,
  },
});