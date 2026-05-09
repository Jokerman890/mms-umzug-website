import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mms-umzug-website/",
  plugins: [react()],
  server: {
    allowedHosts: ["host.docker.internal"],
  },
});
