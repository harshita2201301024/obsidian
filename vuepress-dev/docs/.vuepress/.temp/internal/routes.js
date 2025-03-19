export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Async_Await.html", { loader: () => import(/* webpackChunkName: "Async_Await.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/Async_Await.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to Bathla Tuition Center"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"Contact Us"} }],
  ["/for_in.html", { loader: () => import(/* webpackChunkName: "for_in.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/for_in.html.js"), meta: {"title":""} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/three.html", { loader: () => import(/* webpackChunkName: "three.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/three.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Us"} }],
  ["/frontend/vue.html", { loader: () => import(/* webpackChunkName: "frontend_vue.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/frontend/vue.html.js"), meta: {"title":""} }],
  ["/frontend/vue/", { loader: () => import(/* webpackChunkName: "frontend_vue_index.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/frontend/vue/index.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
