import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add function', () => {
  test('should add two numbers correctly', () => {
    //? Arrange
    const a = 5;
    const b = 3;

    //? Act
    const result = add(a, b);

    //? Assert
    expect(result).toBe(a + b);
  });

  test('should not mutate the first argument', () => {
    //? Arrange
    const a = 5;
    const b = 3;

    //? Act
    add(a, b);

    //? Assert
    expect(a).toBe(5);
  });
});

describe('subtract function', () => {
  test('should subtract two numbers correctly', () => {
    //? Arrange
    const a = 5;
    const b = 3;

    //? Act
    const result = subtract(a, b);

    //? Assert
    expect(result).toBe(a - b);
  });
  test('should not return negative number', () => {
    //? Arrange
    const a = 13;
    const b = 5;
    
    //? Act
    const result = subtract(a, b);

    //? Assert
    expect(result).toBeGreaterThanOrEqual(0);
  });
});

describe('multiply function', () => {
  test('should multiply two numbers correctly', () => {
    //? Arrange
    const a = 5;
    const b = 3;

    //? Act
    const result = multiply(a, b);

    //? Assert
    expect(result).toBe(a * b);
  });
  test(' should not return zero when multiplying two non-zero numbers', () => {
    //? Arrange
    const a = 5;
    const b = 3;
    
    //? Act
    const result = multiply(a, b);

    //? Assert
    expect(result).not.toBe(0);
  }); 
});
