import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/murchland-history/', // Replace with your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});