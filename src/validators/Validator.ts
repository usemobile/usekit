/**
 * Interface of all Validators.
 */
export interface Validator {
  /**
   * Checks if the given value is considered valid by
   * this Validator.
   * @param value The string to be checked.
   */
  isValid(value: string): boolean
}
