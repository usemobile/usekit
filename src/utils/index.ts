/**
 * Numbers used to check a document or something containing numbers.
 */
type CheckSums = [number, number];

/**
 * Utility functions.
 */
class Util {

  /**
   * Matches every non-numeric characters.
   */
  private readonly NON_NUMERIC = /\D/g;

  /**
   * Maps to a text containing only numeric characters.
   * @param value A text containing numbers.
   */
  mapToNumeric(value: string): string {
    return value.replace(this.NON_NUMERIC, '');
  }

  /**
   * Maps a text to a collection of it's numbers.
   * @param value A text containing numbers.
   */
  mapToNumbers(value: string): number[] {
    return this.mapToNumeric(value).split('').map(Number);
  }

  /**
   * Check if items are same, if their values are repeated.
   * @param items The items to be checked.
   */
  isRepeatedArray<T>(items: Array<T>): boolean {
    return items.every((item) => items[0] === item);
  }

  /**
   * Generate the check sums. Multiply numbers to validators and sum them to generate
   * check sums, they're used to check if numbers are valid.
   * @param numbers Numbers used to generate checkers.
   * @param validators Validators used to generate checkers.
   */
  generateCheckSums(numbers: number[], validators: number[]): CheckSums {
    const initialCheckSums: CheckSums = [0, 0];

    return validators.reduce(([checkerA, checkerB], validator, index) => [
      (index === 0) ? 0 : (checkerA + numbers[index -1] * validator),
      checkerB + numbers[index] * validator
    ] as CheckSums, initialCheckSums)
  }

  /**
   * Get remaining of 11 or `0` if lower than 2.
   * @param value Value used remaining.
   */
  getRemaining(value: number): number {
    return (value % 11) < 2 ? 0 : 11 - (value % 11);
  }
}

export default Util;
