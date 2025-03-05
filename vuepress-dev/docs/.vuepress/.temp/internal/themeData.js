export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Subjects\",\"link\":\"/subjects/\"},{\"text\":\"Frontend Courses\",\"link\":\"/frontend/\"},{\"text\":\"About Us\",\"link\":\"/about/\"},{\"text\":\"Contact\",\"link\":\"/contact/\"}],\"sidebar\":{\"/subjects/\":[{\"text\":\"Mathematics\",\"link\":\"/subjects/math/\"},{\"text\":\"Science\",\"link\":\"/subjects/science/\"},{\"text\":\"Economics\",\"link\":\"/subjects/economics/\"},{\"text\":\"Accounts\",\"link\":\"/subjects/accounts/\"}],\"/frontend/\":[{\"text\":\"HTML & CSS\",\"link\":\"/frontend/html-css/\"},{\"text\":\"JavaScript\",\"link\":\"/frontend/javascript/\"},{\"text\":\"Vue.js\",\"link\":\"/frontend/vue/\"},{\"text\":\"React.js\",\"link\":\"/frontend/react/\"}]},\"colorMode\":{\"light\":{\"brandColor\":\"#007BFF\",\"accentColor\":\"#FFA500\"}},\"contributors\":false,\"editLink\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
