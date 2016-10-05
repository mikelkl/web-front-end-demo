> *官方文档: http://vuejs.org/guide/events.html#Method-Event-Handlers*

---

## Listening to Events
We can use the `v-on` directive to listen to DOM events and run some JavaScript when they’re triggered.

## Method Event Handlers
The logic for many event handlers will be more complex though, so keeping your JavaScript in the value of the `v-on` attribute simply isn’t feasible. That’s why `v-on` can also accept the name of a method you’d like to call.

## Methods in Inline Handlers
Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement

## Event Modifiers
It is a very common need to call `event.preventDefault()` or `event.stopPropagation()` inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

To address this problem, Vue provides event modifiers for `v-on`. Recall that modifiers are directive postfixes denoted by a dot.
- `.stop`
- `.prevent`
- `.capture`
- `.self`

## Key Modifiers

## Why Listeners in HTML?
You might be concerned that this whole event listening approach violates the good old rules about “separation of concerns”. Rest assured - since all Vue handler functions and expressions are strictly bound to the ViewModel that’s handling the current view, it won’t cause any maintenance difficulty. In fact, there are several benefits in using `v-on`:

1. It’s easier to locate the handler function implementations within your JS code by simply skimming the HTML template.
1. Since you don’t have to manually attach event listeners in JS, your ViewModel code can be pure logic and DOM-free. This makes it easier to test.
1. When a ViewModel is destroyed, all event listeners are automatically removed. You don’t need to worry about cleaning it up yourself.

