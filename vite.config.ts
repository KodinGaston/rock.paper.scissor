import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,  // Permite acceder desde LAN
    https: false, // Asegura que no fuerce HTTPS en local
  },
  base: '/rock.paper.scissor/',
  build: {
    outDir: "dist",
  },
});
