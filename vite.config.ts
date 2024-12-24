import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/murchlands/', // Updated to match your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});