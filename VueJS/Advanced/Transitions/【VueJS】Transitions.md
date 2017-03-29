> *官方文档: http://vuejs.org/guide/transitions.html*

---

## Overview
Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:

- automatically apply classes for CSS transitions and animations
- integrate 3rd-party CSS animation libraries, such as Animate.css
- use JavaScript to directly manipulate the DOM during transition hooks
- integrate 3rd-party JavaScript animation libraries, such as Velocity.js

On this page, we’ll only cover entering, leaving, and list transitions.

## Transitioning Single Elements/Components
Vue provides a `transition` wrapper component, allowing you to add entering/leaving transitions for any element or component in the following contexts:

- Conditional rendering (using `v-if`)
- Conditional display (using `v-show`)
- Dynamic components
- Component root nodes

## Transitions on Initial Render
If you also want to apply a transition on the initial render of a node, you can add the appear attribute: 

```html
<transition appear>
  <!-- ... -->
</transition>
```

By default, this will use the transitions specified for entering and leaving. If you’d like however, you can also specify custom CSS classes:

```html
<transition
  appear
  appear-class="custom-appear-class"
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```

and custom JavaScript hooks:
```html
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
>
  <!-- ... -->
</transition>
```

## Transitioning Between Elements

## Transitioning Between Components
Transitioning between components is even simpler - we don’t even need the `key` attribute. Instead, we just wrap a [dynamic component](http://vuejs.org/guide/components.html#Dynamic-Components)

## List Transitions
So far, we’ve managed transitions for:

- Individual nodes
- Multiple nodes where only 1 is rendered at a time

So what about for when we have a whole list of items we want to render simultaneously, for example with `v-for`? In this case, we’ll use the `<transition-group>` component. Before we dive into an example though, there are a few things that are important to know about this component:

- Unlike `<transition>`, it renders an actual element: a `<span>` by default. You can change the element that’s rendered with the `tag` attribute.
- Elements inside are always required to have a unique `key` attribute