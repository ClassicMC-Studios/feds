import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
server: {
  allowedHosts: ['5173-classicmcstudios-feds-d78h9699job.ws-us118.gitpod.io']
}