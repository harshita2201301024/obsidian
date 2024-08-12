
``` HTML
<html lang="en">
<meta charset="UTF-8" />
<head>
<title>Vue - the progressive framework</title>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
<div id="app">
<h1>Hello {{ user }}</h1>
</div>
</body>
</html>
```

The curly braces around user are specific to the Vue templating syntax, indicating that user should be replaced by its value.

We are using the latest version of Vue in this example. You can specify any version
you want by adding @version after https://unpkg.com/vue in the URL. This version
of the ebook is using vue@3.4.31.

``` HTML
<html lang="en">
  <meta charset="UTF-8" />
  <head>
    <title>Vue - the progressive framework</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>Hello {{ user }}</h1>
    </div>
    <script>
      const RootComponent = {
        setup() {
          return { user: "Cédric" }
        },
      }
      const app = Vue.createApp(RootComponent)
      app.mount("#app")
    </script>
  </body>
</html>
```

if we want to register one more component. 

``` HTML
<html lang="en">
  <meta charset="UTF-8" />
  <head>
    <title>Vue - the progressive framework</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script type="text/x-template" id="unread-messages-template">
      <div>You have {{ unreadMessagesCount }} messages</div>
    </script>
  </head>
  <body>
    <div id="app">
      <h1>Hello {{ user }}</h1>
      <unread-messages></unread-messages>
    </div>
    <script>
      const UnreadMessagesComponent = {
        template: "#unread-messages-template",
        setup() {
          return { unreadMessagesCount: 4 }
        },
      }
      const RootComponent = {
        components: {
          UnreadMessages: UnreadMessagesComponent,
        },
        setup() {
          return { user: "Cédric" }
        },
      }
      const app = Vue.createApp(RootComponent)
      app.mount("#app")
    </script>
  </body>
</html>

```

