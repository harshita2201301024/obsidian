import { defaultTheme } from "@vuepress/theme-default";

export default defaultTheme({
  navbar: [
    { text: "Home", link: "/" },
    { text: "Subjects", link: "/subjects/" },
    { text: "Frontend Courses", link: "/frontend/" },
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
