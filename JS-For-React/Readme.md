# JavaScript: Function vs Arrow Function & `this`

## `this` Keyword
- Refers to the object that executes the function.
- Value depends on **how the function is called**.

## Regular Function
- Has its own `this` (runtime binding).
- `this` may change inside callbacks.
- Function declarations are hoisted.

## Arrow Function
- No own `this` (lexical binding).
- Inherits `this` from surrounding scope.
- Shorter syntax, no `bind`.
- Preferred in modern React.

## React Best Practice
- Use **arrow functions** for components, hooks, and handlers.
- Use **regular functions** only when dynamic `this` is required.