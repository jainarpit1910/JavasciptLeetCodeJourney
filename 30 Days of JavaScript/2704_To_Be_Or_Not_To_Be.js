/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const obj = {
        toBe : function (args) {
            if (val === args) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function (args) {
            if (val !== args) {
                return true;
            } 
            throw new Error("Equal");
        }
    }

    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */