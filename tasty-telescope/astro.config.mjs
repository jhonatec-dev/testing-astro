import preact from "@astrojs/preact";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.jhonatec.dev",
  integrations: [react({
    include: /\.tsx$/
  }), preact({
    include: /\.preact\.jsx$/
  }), tailwind()],
  output: "server",
  adapter: vercel()
});