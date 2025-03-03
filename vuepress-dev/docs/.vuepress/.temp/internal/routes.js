export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/Async_Await.html", { loader: () => import(/* webpackChunkName: "Async_Await.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/Async_Await.html.js"), meta: {"title":""} }],
  ["/for_in.html", { loader: () => import(/* webpackChunkName: "for_in.html" */"/Users/aakashbathla/Desktop/Obsidia/vuepress-dev/docs/.vuepress/.temp/pages/for_in.html.js"), meta: {"title":""} }],
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
