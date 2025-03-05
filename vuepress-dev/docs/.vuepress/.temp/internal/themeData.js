export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Classes\",\"prefix\":\"/classes/\",\"children\":[{\"text\":\"9th Class\",\"link\":\"9th\"},{\"text\":\"10th Class\",\"link\":\"10th\"},{\"text\":\"11th Class\",\"link\":\"11th\"},{\"text\":\"12th Class\",\"link\":\"12th\"}]},{\"text\":\"Frontend Courses\",\"prefix\":\"/frontend/\",\"children\":[{\"text\":\"Javascript\",\"link\":\"javascript\"},{\"text\":\"Vue.js\",\"link\":\"vue\"},{\"text\":\"React.js\",\"link\":\"react\"},{\"text\":\"12th Class\",\"link\":\"12th\"}]},{\"text\":\"About Us\",\"link\":\"/about/\"},{\"text\":\"Contact\",\"link\":\"/contact/\"}],\"sidebar\":{\"/subjects/\":[{\"text\":\"Mathematics\",\"link\":\"/subjects/math/\"},{\"text\":\"Science\",\"link\":\"/subjects/science/\"},{\"text\":\"Economics\",\"link\":\"/subjects/economics/\"},{\"text\":\"Accounts\",\"link\":\"/subjects/accounts/\"}],\"/frontend/\":[{\"text\":\"HTML & CSS\",\"link\":\"/frontend/html-css/\"},{\"text\":\"JavaScript\",\"link\":\"/frontend/javascript/\"},{\"text\":\"Vue.js\",\"link\":\"/frontend/vue/\"},{\"text\":\"React.js\",\"link\":\"/frontend/react/\"}]},\"colorModeSwitch\":true,\"colorMode\":\"light\",\"contributors\":false,\"editLink\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
