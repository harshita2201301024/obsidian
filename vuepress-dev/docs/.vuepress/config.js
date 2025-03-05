import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",

  title: "Welcome to Bathla Tuition Center!",
  description:
    "Master Math, Science, Economics, Accounts & Frontend Development",

  theme,

  bundler: viteBundler(),
});
