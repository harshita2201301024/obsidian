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

_Fun fact: if you interpolate a complete object, you’ll see the JSON structure of this object, which is_

_super handy when developing😀

_When loading the app, you will have an error, telling you that this property does not exist:_

_'[Vue warn]: Property "users" was accessed during render but is not defined on_

_instance'_

__

_You only get this warning when you open your application in your browser. But,_

_sadly, the compilation raises no warning if you have an error in a template, unlike_

_some other frameworks like Angular. Hopefully you also have unit tests in your_

_application that would catch the problem early enough, before going to_

_production. We’ll see how to unit test components and their template in a few_

_chapters._

_There are some initiatives from the community to have template type-checking at_

_compile time though:_

_•_ _Volar_ _(the most advanced currently, that we use in our projects, this ebook_

_examples and the Pro Pack exercises)_

_•_ _VTI_ _from the Vetur team_

_•_ _VueDX_ _All these projects are experimental but worth giving a try._

Difference between properties and attributes
_The_ _input_ _tag above has two attributes: a_ _type_ _attribute, and a_ _value_ _attribute. When the browser_

_parses this tag, it creates a corresponding DOM node (an_ _HTMLInputElement_ _if we want to be_

_69_

_accurate), which has the matching properties_ _type_ _and_ _value__. Each standard HTML attribute has a_

_corresponding property in the DOM node. But the DOM node also has additional properties, which_

_don’t have a corresponding attribute. For example:_ _childElementCount__,_ _innerHTML_ _or_ _textContent__._

_The interpolation we had above to display the user’s name:_

_<div>__{{ user.name }}__</div>_

_is very similar to writing the following:_

_<div_ _:textContent=__"user.name"__></div>_

these above two are same


_9.3.3._ _v-bind_ _with an object_

_It is also possible to use_ _v-bind_ _without a parameter (no_ _:property__), and to give it an object directly._

_In that case, the directive binds all the keys of the object:_

_<button_ _v-bind=__"buttonProperties"__>__Log in__</button>_

_with a property named_ _buttonProperties__, which can have as many key/value as you want:_

_setup__() {_

_return_ _{_

_buttonProperties__:_ _ref__({_

_disabled__:_ _true__,_

_type__:_ _'button'_ _as_ _const_

_}),_

_};_

_}_


we can also v-bind with an object
_<button_ _class=__"btn"_ _:class=__"buttonClasses"__>__Log in__</button>_

_setup__() {_

_return_ _{_

_buttonClasses__:_ _ref__({_

_'btn-primary'__:_ _true__,_

_'btn-small'__:_ _false_

_}),_

_};_

_}_


_<div_ _:style=__"textStyle"__>__Some text__</div>_

_setup__() {_

_return_ _{_

_textStyle__:_ _ref__({_

_71_

_color__:_ _'red'__,_

_fontWeight__:_ _'bold'_ _as_ _const_

_})_

_};_

_}_


_9.4.3._ _.exact_ _modifier_

_If you want an event to be handled only if this is exactly this event, and not this event + another_

_system modifier, you can add the_ _.exact_ _modifier._

_9.4.5._ _.once_ _modifier_

_If you want an event listener to execute only once, you can add the_ _.once_ _modifier:_

_<button_ _@__click.once=__"save()"__>__Save__</button>_
