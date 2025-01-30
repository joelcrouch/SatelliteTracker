import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});

// vite config.ts does not have a lot of configuration options. The main configuration option is the plugins array, which is used to add plugins to the Vite build process. In this case, the react plugin is added to enable React support in the project. The server configuration option is used to set up a proxy for API requests. Any requests to the /api path will be proxied to http://localhost:5000. This is useful for development, as it allows the frontend to communicate with the backend without running into CORS issues. The proxy configuration is a simple key-value pair, where the key is the path to proxy and the value is the target URL. In this case, any requests to /api/satellites/{id} will be proxied to http://localhost:5000/satellites/{id}. This allows the frontend to fetch satellite data from the backend API without having to worry about CORS restrictions. The proxy configuration is a powerful feature of Vite that simplifies the development process by handling cross-origin requests transparently. It allows developers to focus on building the frontend without getting bogged down by backend setup and configuration.
