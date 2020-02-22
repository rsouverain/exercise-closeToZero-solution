import { createTestCases } from '../cases'
const testCases = createTestCases()

describe(`function closestToZeroBadPerfs`, () => {
    for (const testCase of testCases) {
        test(testCase.message, () => {
            const { closestToZeroBadPerfs } = require('../../lib/')
            const solution = closestToZeroBadPerfs(testCase.input)
            expect.assertions(1)
            expect(solution).toBe(testCase.expected)
        })
    }
})


export {}
