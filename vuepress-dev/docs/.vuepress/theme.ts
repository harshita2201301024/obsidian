import { defaultTheme } from "@vuepress/theme-default";

export default defaultTheme({
  navbar: [
    { text: "Home", link: "/" },
    {
      text: "Classes",
      prefix: "/classes/",
      children: [
        { text: "9th Class", link: "9th" },
        { text: "10th Class", link: "10th" },
        { text: "11th Class", link: "11th" },
        { text: "12th Class", link: "12th" },
      ],
    },
    {
      text: "Frontend Courses",
      prefix: "/frontend/",
      children: [
        { text: "Javascript", link: "javascript" },
        { text: "Vue.js", link: "vue" },
        { text: "React.js", link: "react" },
        { text: "Typescript", link: "typescript" },
        { text: "Nuxt", link: "nuxt" },
      ],
    },
    { text: "About Us", link: "/about/" },
    { text: "Contact", link: "/contact/" },
  ],
  sidebar: {
    "/subjects/": [
      { text: "Mathematics", link: "/subjects/math/" },
      { text: "Science", link: "/subjects/science/" },
      { text: "Economics", link: "/subjects/economics/" },
      { text: "Accounts", link: "/subjects/accounts/" },
    ],
    "/frontend/": [
      { text: "HTML & CSS", link: "/frontend/html-css/" },
      { text: "JavaScript", link: "/frontend/javascript/" },
      { text: "Vue.js", link: "/frontend/vue/" },
      { text: "React.js", link: "/frontend/react/" },
    ],
  },
  colorModeSwitch: true,
  colorMode: "light",
  contributors: false,
  editLink: false,
});
