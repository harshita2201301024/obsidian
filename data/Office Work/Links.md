
Dev Url: https://iid-dev.detsandbox.com/
Work Items: https://devops.det.gov.ae/DefaultCollection/IID/_workitems/recentlyupdated/
Pull Requests: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal/pullrequests?_a=mine
deployment Portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/portal-dev
iid portal: https://devops.det.gov.ae/DefaultCollection/IID/_git/det-iid_portal
Epics - https://devops.det.gov.ae/DefaultCollection/IID/_backlogs/backlog/IID%20Team/Epics
Rancher - https://k8s01-rmc.corp.det.gov.ae/dashboard/c/c-m-g4sb59z7/explorer/apps.deployment/iid-uat/portal#pods


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

{

"tlsTradeNameId": "2451681",

"creationType": "3",

"primaryPersonId": "186"

}

Mohammed Arafat
Leen



go to dev-helm
create new branch add 3 files
1. make changes templates/portal.yaml
2. make changes in values.yaml
3. make changes in chart.yaml
Atlast fleet.yml in dev portal




downloadFile(params) {
    return new Promise((resolve, reject) => {
      const url = this.formatUrl(params.originalPath)
      InternalApi.downloadFile(url)
        .then(({ response, fileName }) => {
          const blob = new Blob([response], { type: response.type })
          const blobSafari = new Blob([response], { type: 'application/octet-stream' })
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob)
            return
          }
          const blobUrl = window.URL.createObjectURL(blob)

          if (params.isPreview) {
            openInNewTab(blobUrl)
            resolve('')
          } else if (params.getBlob) {
            resolve(blobUrl)
          } else {
            this.initiateBrowserDownload(blobUrl, fileName, resolve, blob, blobSafari)
          }
        })
        .catch(reject)
    })
  }

  initiateBrowserDownload(blobUrl, fileName, resolve, blob, blob2) {
    const isMobileSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      /iPad|iPhone|iPod/.test(navigator.platform)
    if (isMobileSafari) {
      FileSaver.saveAs(blob2, fileName)
    } else {
      FileSaver.saveAs(blob, fileName)
    }
    console.log(blobUrl)
    console.log(resolve)

    //
    // if (isMobileSafari) {
    //   const reader = new FileReader()
    //   reader.onload = function () {
    //     const link = document.createElement('a')
    //
    //     link.href = reader.result
    //     link.download = fileName
    //     document.body.appendChild(link)
    //     link.click()
    //     setTimeout(function () {
    //       window.URL.revokeObjectURL(blobUrl)
    //       resolve('')
    //     }, 500)
    //   }
    //   reader.readAsDataURL(blobUrl)
    // } else {
    //   const link = document.createElement('a')
    //   link.href = blobUrl
    //   link.setAttribute('download', fileName)
    //   document.body.appendChild(link)
    //   link.click()
    //   setTimeout(function () {
    //     window.URL.revokeObjectURL(blobUrl)
    //     resolve('')
    //   }, 500)
    // }
  }