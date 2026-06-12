import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Use Vite's native tsconfig paths resolution
    tsconfigPaths: true,
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  // Use a safe default dev port and bind to localhost to avoid wildcard conflicts
  server: { host: "localhost", port: 3000, strictPort: false },
});