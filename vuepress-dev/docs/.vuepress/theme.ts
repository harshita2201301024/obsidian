import { defaultTheme } from "@vuepress/theme-default";

export default defaultTheme({
  navbar: [
    { text: "Home", link: "/" },
    {
      text: "Classes",
      prefix: "/classes/",
      children: [
        {
          text: "9th Class",
          prefix: "9th/",
          children: [
            { text: "Math", link: "math" },
            { text: "Science", link: "science" },
          ],
        },
        {
          text: "10th Class",
          prefix: "10th/",
          children: [
            { text: "Math", link: "math" },
            { text: "Science", link: "science" },
          ],
        },
        {
          text: "11th Class",
          prefix: "11th/",
          children: [
            { text: "Math", link: "math" },
            { text: "Physics", link: "physics" },
            { text: "Chemistry", link: "chemistry" },
          ],
        },
        {
          text: "12th Class",
          prefix: "12th/",
          children: [
            { text: "Math", link: "math" },
            { text: "Physics", link: "physics" },
            { text: "Chemistry", link: "chemistry" },
          ],
        },
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
    { text: "About Us", link: "/about" },
    { text: "Contact", link: "/contact" },
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
