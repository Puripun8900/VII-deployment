// This path is correct for a test file in 'test' calling a source file in 'src'
const isObject = require('../src/isObject'); 

describe('isObject Coverage Test', () => {
    // This executes library code and generates a non-empty coverage report
    test('should identify an object and generate coverage report', () => {
        expect(isObject({})).toBe(true); 
    });
});