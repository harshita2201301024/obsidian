
Dev Url: https://iid-dev.detsandbox.com/
Work Items: https://devops.det.gov.ae/DefaultCollection/IID/_workitems/recentlyupdated/
Pull Requests: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal/pullrequests?_a=mine
deployment Portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/portal-dev
iid portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal


```
const app = Array.from(
  document.querySelectorAll("*")
).find((e) => e.__vue__).__vue__;

const devtools =

  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

devtools.enabled = true;

const Vue =

  Object.getPrototypeOf(app).constructor;

while (Vue.super) {

  Vue = Vue.super;

}

Vue.config.devtools = true;

devtools.emit("init", Vue);
```

