/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // Choose one of the according to your understaing or acceptance on the plateform.

    /**
     * 1st way -> Remove all the zeors and push the zeros at the end.
     */
    let start = nums.length - 1;
    while (start >= 0) {
        if (nums[start] == 0) {
            nums.splice(start, 1);
            nums.push(0);
        }
        start--
    }

    /**
     * 2nd way -> Accepted but not highly optimized 
     */
    let indexWithoutZero = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !==0 ) {
            let temp = nums[indexWithoutZero];
            nums[indexWithoutZero] = nums[i];
            nums[i] = temp;
            indexWithoutZero++;
        }
    }


    /**
     * 3rd way -> Highly optimal 
     */

    let indexWithZero = -1;

    for (let i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            indexWithZero = i;
            break;
        }
    }

    if (indexWithZero == -1) {
        return nums;
    }

    for (let i=indexWithZero+1; i<nums.length; i++) {
        if (nums[i] !=0 ) {
            [nums[i], nums[indexWithZero]] = [nums[indexWithZero], nums[i]];  // Swap the element in the array.
            indexWithZero++;
        }
    }
};