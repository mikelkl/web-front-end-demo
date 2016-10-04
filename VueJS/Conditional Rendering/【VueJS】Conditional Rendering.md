> *官方文档: http://vuejs.org/guide/conditional.html*

---
## v-if

## v-show
Another option for conditionally displaying an element is the `v-show` directive. The usage is largely the same:
```html
<h1 v-show="ok">Hello!</h1>
```
The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` simply toggles the `display` CSS property of the element.

> Note that `v-show` doesn’t support the `<template>` syntax, nor does it work with` v-else`.

## v-if vs. v-show
```v-if``` is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

```v-if``` is also **lazy**: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.

In comparison, ```v-show``` is much simpler - the element is always rendered regardless of initial condition, with just simple CSS-based toggling.

Generally speaking, ```v-if``` has higher toggle costs while ```v-show``` has higher initial render costs. So prefer ```v-show``` if you need to toggle something very often, and prefer ```v-if``` if the condition is unlikely to change at runtime.