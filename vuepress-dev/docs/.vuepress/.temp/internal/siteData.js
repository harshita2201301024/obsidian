export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Welcome to Bathla Tuition Center!\",\"description\":\"At Bathla Tuition Center, we provide expert guidance in Mathematics, Science, Economics, and Accounts to help students excel in their academics. Our goal is to simplify complex concepts and make learning engaging and effective.<br/>In addition to offline tuition, we are expanding into online frontend development courses, where students can learn HTML, CSS, JavaScript, Vue.js, and React.js from scratch. Whether you’re a beginner or looking to enhance your skills, our structured courses will provide hands-on experience.<br/>This website will serve as a central hub for all our course materials and documentation—covering everything from academic subjects to frontend development tutorials. Stay tuned for updates on new courses, study resources, and more!\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
