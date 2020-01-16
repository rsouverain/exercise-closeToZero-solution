"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function closestToZero(input = undefined) {
    // If the input array is undefined or empty, the function returns 0
    if (!Array.isArray(input) || !input.length) {
        return 0;
    }
    // Let's have the input array as absolute value only.
    const absolutes = input.map(Math.abs);
    // Now, we get the minimum from the absolute values
    const absoluteMin = Math.min(...absolutes);
    if (input.includes(absoluteMin)) {
        // If the closest number in input could be either negative or positive, the function returns the positive one
        return absoluteMin;
    }
    else {
        return -absoluteMin;
    }
}
exports.closestToZero = closestToZero;
//# sourceMappingURL=closestToZero.js.map