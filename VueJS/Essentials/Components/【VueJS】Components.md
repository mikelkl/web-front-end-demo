> *官方文档: http://vuejs.org/guide/components.html*

---

## What are Components?
Components are one of the most powerful features of Vue. They help you extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements that Vue’s compiler attaches behavior to. In some cases, they may also appear as a native HTML element extended with the special `is` attribute.

## Using Components

## Props

## Custom Events
We have learned that the parent can pass data down to the child using props, but how do we communicate back to the parent when something happens? This is where custom events come in.

## Content Distribution with Slots
When using components, it is often desired to compose them like this:

```html
<app>
  <app-header></app-header>
  <app-footer></app-footer>
</app>
```

There are two things to note here:

1. The `<app>` component does not know what content may be present inside its mount target. It is decided by whatever parent component that is using `<app>`.
1. The `<app>` component very likely has its own template.

To make the composition work, we need a way to interweave the parent “content” and the component’s own template. This is a process called content distribution (or “transclusion” if you are familiar with Angular). Vue.js implements a content distribution API that is modeled after the current [Web Components spec draft](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md), using the special `<slot>` element to serve as distribution outlets for the original content.

## Dynamic Components
You can use the same mount point and dynamically switch between multiple components using the reserved `<component>` element and dynamically bind to its `is` attribute:

```html
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
```

```html
<component v-bind:is="currentView">
  <!-- component changes when vm.currentView changes! -->
</component>
```

If you prefer, you can also bind directly to component objects:

```html
var Home = {
  template: '<p>Welcome home!</p>'
}

var vm = new Vue({
  el: '#example',
  data: {
    currentView: Home
  }
})
```

## Misc