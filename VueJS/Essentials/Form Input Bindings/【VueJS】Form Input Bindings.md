> *官方文档: http://vuejs.org/guide/forms.html*

---

## Basic Usage
You can use the `v-model` directive to create two-way data bindings on form input and textarea elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, `v-model` is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.

> `v-model` doesn’t care about the initial value provided to an input or a textarea. It will always treat the Vue instance data as the source of truth.

## Value Bindings
For radio, checkbox and select options, the `v-model` binding values are usually static strings (or booleans for checkbox):

```html
<!-- `picked` is a string "a" when checked -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` is either true or false -->
<input type="checkbox" v-model="toggle">

<!-- `selected` is a string "abc" when selected -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

But sometimes we may want to bind the value to a dynamic property on the Vue instance. We can use `v-bind` to achieve that. In addition, using `v-bind` allows us to bind the input value to non-string values.

## Modifiers
- `.lazy`
- `.number`
- `.trim`