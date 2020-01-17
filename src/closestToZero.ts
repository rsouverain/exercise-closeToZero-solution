/**
 * Returns the closest number to zero from the input array.
 * Emphasis given on perfs
 */
export function closestToZero (input: Array<number>) : number {

    // If the input array is undefined or empty, the function returns 0
    if (!Array.isArray(input) || !input.length) {
        return 0
    }

    let result = null
    let resultDistanceToZero = null

    // Reverse looping through input array
    for (let i = input.length-1; i>=0; i--) {
        const item = input[i]

        // Current item in the array is not a number, ignoring it
        if (item === null || isNaN(item)) {
            continue
        }

        // The closest to zero has the minimum distance to zero...
        const distanceToZero = Math.abs(item)
        if (
            resultDistanceToZero === null ||
            distanceToZero < resultDistanceToZero ||
            (
                resultDistanceToZero === distanceToZero &&
                result !== null &&
                item > 0
            )
        ) {
            result = item
            resultDistanceToZero = distanceToZero
        }
    }

    if (result === null) {
        throw new Error('Result cannot be null')
    }

    return result
}
