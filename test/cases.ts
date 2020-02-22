export function createTestCases () {
    return [
        {
            message: 'if the input array is undefined, returning 0',
            input: undefined,
            expected: 0,
        },
        {
            message: 'if the input array is empty, returning 0',
            input: [],
            expected: 0,
        },
        {
            message: 'Invalid input 1: is a string, returning 0',
            input: 'this is a string',
            expected: 0,
        },
        {
            message: 'Invalid input 2: contains invalid numbers, ignoring them.',
            input: [5, 2, -3, null, 'foo', 5],
            expected: 2,
        },
        {
            message: '**** example array 1 **** only positive numbers',
            input: [8, 5, 10],
            expected: 5,
        },
        {
            message: '**** example array 2 **** mixed positive and negative numbers, the solution only exists as a negative number',
            input: [5, 4, -9, 6, -10, -1, 8],
            expected: -1,
        },
        {
            message: '**** example array 3 **** mixed positive and negative numbers, the solution only exists as a positive number',
            input: [8, 2, 3, -2],
            expected: 2,
        },
        {
            message: 'mixed positive and negative numbers, the solution could exists as a negative and positive number, resolving a positive',
            input: [5, 1, 4, -9, 6, -10, -1, 8],
            expected: 1,
        },
        {
            message: 'The closest to 0 is 0',
            input: [-5, 3, -4, 0, -2, 2],
            expected: 0,
        },
        {
            message: 'Only negative numbers',
            input: [-8, -9, -4, -1],
            expected: -1,
        },
        {
            message: 'Only one negative number',
            input: [-100],
            expected: -100,
        },
        {
            message: 'Only one positive number',
            input: [100],
            expected: 100,
        },
        {
            message: 'Only zero',
            input: [0],
            expected: 0,
        },
        {
            message: 'Contains multiple solutions',
            input: [4, 5, 2, 3, -5, 4, 2, -3, 8],
            expected: 2,
        },
    ]
}
