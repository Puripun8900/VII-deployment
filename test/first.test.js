// This function and file (utils.js) are confirmed to exist in your project.
// Path: From 'test/' up one level ('../') to the root directory where 'utils.js' sits.
const { isString } = require('../utils'); 

describe('isString Utility Coverage Test', () => {
    // This is the CRITICAL STEP: Calling a known, imported function.
    test('should return true for a valid string input', () => {
        expect(isString('hello')).toBe(true); 
    });
    
    // Testing the opposite case (branch coverage)
    test('should return false for a number', () => {
        expect(isString(123)).toBe(false); 
    });
});