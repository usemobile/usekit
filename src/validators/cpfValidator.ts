import { Validator } from './Validator';
import { CpfFormatter } from '../usekit';
import Utils from '../utils';

/**
 * The CPF validator.
 */
class CpfValidator implements Validator {

  /**
   * Validator array for CPF.
   */
  private readonly CPF_VALIDATORS: Array<number> = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  private utils: Utils;
  private cpfFormatter: CpfFormatter;

  constructor() {
    this.utils = new Utils();
    this.cpfFormatter = new CpfFormatter();
  }

  /**
 * Check if value is a valid CPF.
 * @example ```js
 * CpfValidator.isValid('366.418.768-70');
 * //=> true
 *
 * CpfValidator.isValid('36641876870');
 * //=> true
 *
 * CpfValidator.isValid('213.198.013-20');
 * //=> false
 *
 * CpfValidator.isValid('2131201872781');
 * //=> false
 *
 * CpfValidator.isValid('11111111111');
 * //=> false
 * ```
 * @param value A `string` with CPF numbers. Can be formatted or unformatted.
 */
  isValid(value: string) {
    if (!this.cpfFormatter.isFormattable(value)) return false;

    const numbers = this.utils.mapToNumbers(value);
    if (this.utils.isRepeatedArray(numbers)) return false;

    const checkers = this.utils.generateCheckSums(numbers, this.CPF_VALIDATORS);

    return (
      numbers[9] === this.utils.getRemaining(checkers[0])
      && numbers[10] === this.utils.getRemaining(checkers[1])
    );
  }
}

export default CpfValidator;
