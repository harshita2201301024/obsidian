
Dev Url: https://iid-dev.detsandbox.com/
Work Items: https://devops.det.gov.ae/DefaultCollection/IID/_workitems/recentlyupdated/
Pull Requests: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal/pullrequests?_a=mine
deployment Portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/portal-dev
iid portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal
Epics - https://devops.det.gov.ae/DefaultCollection/IID/_backlogs/backlog/IID%20Team/Epics
Rancher - https://k8s01-rmc.corp.det.gov.ae/dashboard/c/c-m-g4sb59z7/explorer/apps.deployment/iid-uat/portal#pods
feature dev deployment - [https://devops.det.gov.ae/DefaultCollection/IID/_git/gitops-feature-dev](https://devops.det.gov.ae/DefaultCollection/IID/_git/gitops-feature-dev "https://devops.det.gov.ae/defaultcollection/iid/_git/gitops-feature-dev")

Form Builder implementation
https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal/pullrequest/13036
https://pictogrammers.com/library/mdi/


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







gitops-uat
create a branch from main
update tags.yml
raise a PR and get it approved from sumeet and ajumal