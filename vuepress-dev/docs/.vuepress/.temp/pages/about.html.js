import comp from "/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About Us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Us\"},\"headers\":[{\"level\":2,\"title\":\"Our Vision\",\"slug\":\"our-vision\",\"link\":\"#our-vision\",\"children\":[]},{\"level\":2,\"title\":\"Our Expertise\",\"slug\":\"our-expertise\",\"link\":\"#our-expertise\",\"children\":[]},{\"level\":2,\"title\":\"Frontend Development Online Training\",\"slug\":\"frontend-development-online-training\",\"link\":\"#frontend-development-online-training\",\"children\":[{\"level\":3,\"title\":\"What You’ll Learn:\",\"slug\":\"what-you-ll-learn\",\"link\":\"#what-you-ll-learn\",\"children\":[]},{\"level\":3,\"title\":\"Why Choose Our Online Frontend Courses?\",\"slug\":\"why-choose-our-online-frontend-courses\",\"link\":\"#why-choose-our-online-frontend-courses\",\"children\":[]}]},{\"level\":2,\"title\":\"Contact Us\",\"slug\":\"contact-us\",\"link\":\"#contact-us\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
