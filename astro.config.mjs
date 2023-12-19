import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const LIVE_URL = "https://CQuarkH.github.io";
const BASE = "/Portfolio";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: LIVE_URL,
  base: BASE,
});
