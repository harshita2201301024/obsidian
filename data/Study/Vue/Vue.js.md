Need to study
What are web components?

Vue.js is built on top of web components

we have a library with the name of webComponent.js. which have template

 _Note that the wrapping_ _div_ _is not necessary as Vue templates now allow having several root_

_elements (that was not the case until Vue 3.0)._

_If you want Vue to reflect the changes of a variable, you have to create a reactive property using_

_ref__. We’ll come back to the_ _ref_ _syntax in details in a following chapter dedicated to components._

_But for now the only thing you need to know is that a_ _ref_ _is just an object with a_ _value_ _property._

_One important fact to remember: if we try to display a property that does not exist, then, instead of_

_displaying_ _undefined__, Vue is going to display an empty string. The same will happen for a_ _null_

_property._

```
_<template>_

_<div>_

_<h1>Ponyracer<__/h1__>_

_<h2>Welcome {{ user.name }}<__/h2__>_

_<__/div__>_

_<__/template__>_

_<script lang=__"ts"__>_

_import_ _{ defineComponent, ref }_ _from_ _'vue'__;_

_export default_ _defineComponent__({_

_name__:_ _'App'__,_

_setup__() {_

_const_ _user =_ _ref__({_

_name__:_ _'C.dric'_

_});_

_return_ _{ user };_

_}_

_});_

_<__/script>_


```

