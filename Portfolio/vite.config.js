import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replace this with your actual GitHub repo name
const repoName = "your-repo-name";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
});
