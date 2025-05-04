import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/market': 'http://localhost:8000',
      '/trade': 'http://localhost:8000'
    }
  }
});
