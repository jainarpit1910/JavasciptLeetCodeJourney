## 283. Move Zeroes 

- Problem Link [(click here)](https://leetcode.com/problems/move-zeroes/description/)

### Q: 

Given an integer array nums, move all `0's` to the end of it while maintaining the relative order of the non-zero elements.

`Note` that you must do this in-place without making a copy of the array.

### Approach:

The goal is to move all zeroes in the array `nums` to the end while maintaining the relative order of non-zero elements, and do this in-place without using extra space.

1. **Find the First Zero**: 
   - Initialize a variable `indexWithZero` to `-1`, which will keep track of the position of the first zero found in the array.
   - Use a `for` loop to iterate through `nums`. As soon as a zero is found, store its index in `indexWithZero` and break out of the loop.

2. **Early Exit**:
   - If no zero is found (`indexWithZero` remains `-1`), return the array as is since no modifications are needed.

3. **Swapping Non-Zero Elements**:
   - Start another loop from the position after the first zero (`indexWithZero + 1`).
   - For each non-zero element encountered, swap it with the element at `indexWithZero`. After each swap, increment `indexWithZero` to keep track of the position of the next zero.

This way, all the zeroes are moved to the end, and the non-zero elements maintain their relative order.

### Solution file: `283_Move_Zeroes.js` 
