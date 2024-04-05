import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.jhonatec.dev",
  integrations: [
    react({
      include: /\.tsx$/,
    }), preact({
      include: /\.jsx$/,
    }),
  ],
});
