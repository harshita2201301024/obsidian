import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Mastering Programming",
  description: "A complete guide to frontend, backend, and more",
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Frontend", link: "/frontend/vue" },
      { text: "Backend", link: "/backend/node" },
    ],
    sidebar: {
      "/frontend/": [
        { text: "Vue.js", link: "/frontend/vue" },
        { text: "React.js", link: "/frontend/react" },
        { text: "TypeScript", link: "/frontend/typescript" },
      ],
      "/backend/": [
        { text: "Node.js", link: "/backend/node" },
        { text: "Python", link: "/backend/python" },
        { text: "PHP", link: "/backend/php" },
      ],
    },
  }),
});
