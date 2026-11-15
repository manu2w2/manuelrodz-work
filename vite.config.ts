import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['sb-34m8pucne8t0.vercel.run', 'workspace-ret6vyvv.v0.build']
  }
});

