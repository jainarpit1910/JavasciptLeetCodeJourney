# 30 Days of JavaScript

- LeetCode: 30 Days of JavaScript [(click here)](https://leetcode.com/studyplan/30-days-of-javascript/)

## Day 1: 2667. Create Hello World Function

**Q**: Write a function `createHelloWorld`. It should return a new function that always returns "Hello World".

**Approach**: Directly return the string "Hello World".

#### Solution file: `2667_Create_Hello_World_Function.js`

## Day 2: 2620. Counter

**Q**: Given an integer `n`, return a counter function. This counter function initially returns `n` and then returns `1` more than the previous value every subsequent time it is called `(n, n + 1, n + 2, etc)`.

**Approach**: First, take a `counter` that increases by one with every function call and returns `counter + n`.

#### Solution file: `2620_Counter.js`


## Day 3: 

**Q**: Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

**Approach**: Define a function `expect` that takes a value `val`. Inside, return an object containing two methods: 
- **`toBe`**: Checks if `val === args`, returning `true` if they are equal, otherwise throws "Not Equal".
- **`notToBe`**: Checks if `val !== args`, returning `true` if they are not equal, otherwise throws "Equal".

**Hint**: You can throw error in js like this: `throw new Error("Not Equal");`

#### Solution file: `2704_To_Be_Or_Not_To_Be.js`

## Day 4:

**Q**: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:
- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.

**Approach**: Define a function `createCounter` that accepts an initial integer `init`. Inside the function:
- Declare a variable `currentValue` and initialize it with `init`.
- Return an object that contains three methods:
  - **`increment()`**: Increases `currentValue` by 1 using the `++` operator and returns the updated value.
  - **`decrement()`**: Decreases `currentValue` by 1 using the `--` operator and returns the updated value.
  - **`reset()`**: Resets `currentValue` to the initial value `init` and returns it.

#### Solution file: `2665_Counter_II.js`
