// 1. IMPORT: The function is in the src directory
// We are using 'require' because Node.js/Jest uses CommonJS modules by default
const isObject = require('../src/isObject'); 

describe('isObject Coverage Test', () => {
    // Test Case 1: Testing a true scenario
    test('should return true for a plain object', () => {
        // Calling the function from the library
        expect(isObject({})).toBe(true); 
    });
    
    // Test Case 2: Testing a false scenario
    test('should return false for an array', () => {
        // Calling the function from the library
        expect(isObject([])).toBe(false); 
    });

    // Test Case 3: Testing a primitive type (ensures more lines of code are executed)
    test('should return false for a string', () => {
        // Calling the function from the library
        expect(isObject('hello')).toBe(false); 
    });
});