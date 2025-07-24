const { tribonacciSequence } = require('./tribonacciSequence')

describe('tribonacci', () => {
    test('returns correct sequence for [1, 1, 1], n = 10', () => {
      expect(tribonacciSequence([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
    });

    test('returns empty array when n = 0', () => {
      expect(tribonacciSequence([0, 1, 2], 0)).toEqual([]);
    });

    test('returns the first value only when n = 1', () => {
      expect(tribonacciSequence([5, 2, 1], 1)).toEqual([5]);
    });

    test('returns first 2 values only when n = 2', () => {
      expect(tribonacciSequence([7, 4, 2], 2)).toEqual([7, 4]);
    });

    test('returns signature when n = 3', () => {
      expect(tribonacciSequence([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    test('generates sequence correctly with signature [0, 0, 1] and n = 10', () => {
      expect(tribonacciSequence([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
    });

    test('generates sequence with all zeros', () => {
      expect(tribonacciSequence([0, 0, 0], 6)).toEqual([0, 0, 0, 0, 0, 0]);
    });

    test('generates sequence with negative numbers', () => {
      expect(tribonacciSequence([-1, -2, -3], 6)).toEqual([-1, -2, -3, -6, -11, -20]);
    });

    test('handles large n = 20', () => {
      const result = tribonacciSequence([1, 1, 1], 20);
      expect(result.length).toBe(20);
      expect(result[3]).toBe(3);
      expect(result[19]).toBeGreaterThan(result[18]);
    });

    test('sequence grows rapidly with [1, 2, 3]', () => {
      expect(tribonacciSequence([1, 2, 3], 7)).toEqual([1, 2, 3, 6, 11, 20, 37]);
    });
  });
