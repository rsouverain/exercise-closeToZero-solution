# closestToZero

## Problem

We usually use TypeScript, but you can use the language of your choice.
We are convinced that testing is the key to productivity and quality, so if you write some unit tests, join them with the code.

Closest to zero
Write a function "closestToZero" described by the following specification:

given an array of positive and negative integers, it returns the closest number to zero
if the closest number in input could be either negative or positive, the function returns the positive one
if the input array is undefined or empty, the function returns 0
Examples:

when input is [8, 5, 10] it must returns 5
when input is [5, 4, -9, 6, -10, -1, 8] it must return -1
when input is [8, 2, 3, -2] it must return 2

### Installation & Requirements

Head over to [./docs/INSTALL.md](./docs/INSTALL.md)


### Project structure overview

Features:
* Code base: NodeJS 10.x & [TypeScript](https://www.typescriptlang.org)
* Code linter: [Eslint](https://eslint.org/)
* Code testing and coverage: [Jest](https://jestjs.io)
    
Folders:

* __docker__: for hosting docker files required for a quick & pre installed runtime environment. Start/Stop the docker stack from this directory. I used it during the development phase. (optional)
* __src__: Where the actual source files of this project's resulting library are located.
* __lib__: TypeScript files from `./src` are compiled into this directory. This is the actual distributable directory.
* __test__: Hold all files related to testing. I decided to use Jest, a test framework I already have some experience with.
    * __.coverage__: Hold Jest's test coverage reports after having ran `npm run test:coverage`
    * __ __tests__ __: Jest will look for `*.test.js` or `*.spec.js` files in this directory. The actual tests to be ran.
* __node_modules__: Vendors installed with `npm install` that may be required for development purposes. I tried to NOT use any external vendor except for compiling, testing, and linting code.


### Tests

To learn how to run tests, as well as code coverage, head over to [./TEST.md](./TEST.md)
