// 1. Import a public function from the library. 
// Path: We are in the 'test' folder, so we go up one level and into 'src'.
const isObject = require('../src/isObject'); 

describe('isObject Function Coverage Test', () => {
    // This test forces execution of the function to generate coverage data.
    test('should identify an object and generate coverage report', () => {
        // Calling the function from the library is the CRITICAL STEP!
        expect(isObject({})).toBe(true); 
    });
    
    // Add another test to check the negative case for full coverage on this function
    test('should return false for a primitive value', () => {
        expect(isObject('string')).toBe(false); 
    });
});