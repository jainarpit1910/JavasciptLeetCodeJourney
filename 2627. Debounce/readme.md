## 2627. Debounce

- Problem Link [(click here)](https://leetcode.com/problems/debounce/description/)

### Q: 

Given a function `fn` and a time in milliseconds `t`, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say `t = 50ms`, and the function was called at `30ms`, `60ms`, and `100ms`.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at `150ms`.

If instead `t = 35ms`, The 1st call would be cancelled, the 2nd would be executed at `95ms`, and the 3rd would be executed at `135ms`.

### Approach:

The problem requires creating a debounced version of a given function `fn`, where the function execution is delayed by `t` milliseconds. If the function is called again within the delay period, the previous call is cancelled, and the timer restarts.

1. **Initialize a Timer**:
   - Declare a variable `timer` that will be used to keep track of the timeout for the delayed function execution.

2. **Return a New Function**:
   - The function returned should accept any number of arguments (`...args`) that will be passed to `fn` when it eventually executes.

3. **Clear Previous Timeout**:
   - On each function call, use `clearTimeout(timer)` to cancel any previously scheduled execution of `fn` that hasn't occurred yet. This ensures that the function only executes if no further calls are made within the delay period.

4. **Set a New Timeout**:
   - Use `setTimeout` to delay the execution of `fn` by `t` milliseconds. Pass the arguments (`...args`) to `fn` when it is called.

The result is a debounced function that will only execute after `t` milliseconds have passed without another call, ensuring that rapid repeated calls only result in a single execution.


### Solution file: `2627_Debounce.js` 
