import { defineConfig } from "vite";

export default defineConfig({
  base: "/rock.paper.scissor/", 

  server: {
    host: true,  // Permite acceder desde LAN
    https: false, // Asegura que no fuerce HTTPS en local
  },
  
  build: {
    outDir: "docs",
  },
});