import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "Welcome to Bathla Tuition Center!",
  description:
    "At Bathla Tuition Center, we provide expert guidance in Mathematics, Science, Economics, and Accounts to help students excel in their academics. Our goal is to simplify complex concepts and make learning engaging and effective.In addition to offline tuition, we are expanding into online frontend development courses, where students can learn HTML, CSS, JavaScript, Vue.js, and React.js from scratch. Whether you’re a beginner or looking to enhance your skills, our structured courses will provide hands-on experience.This website will serve as a central hub for all our course materials and documentation—covering everything from academic subjects to frontend development tutorials. Stay tuned for updates on new courses, study resources, and more!",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/get-started"],
  }),

  bundler: viteBundler(),
});
