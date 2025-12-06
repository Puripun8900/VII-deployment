// 1. IMPORT: Adjust the path if utils.js is inside 'src'
const { isString } = require('../utils'); 
// If utils.js is in src/, the path might be: require('../src/utils');

describe('Utility Functions - isString', () => {
    // Test Case 1: Testing a positive scenario
    test('should return true for a string value', () => {
        expect(isString('hello world')).toBe(true);
    });
    
    // Test Case 2: Testing a negative scenario
    test('should return false for a number value', () => {
        expect(isString(12345)).toBe(false);
    });

    // Test Case 3: Testing an edge case
    test('should return false for null', () => {
        expect(isString(null)).toBe(false);
    });
});