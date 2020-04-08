import { Validator } from './Validator';
import { CnpjFormatter } from '../formatters';
import Utils from '../utils';

/**
 * The CNPJ validator.
 */
class CnpjValidator implements Validator {

  /**
   * Validator array for CNPJ.
   */
  private readonly CNPJ_VALIDATORS: Array<number> = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  private utils: Utils;
  private cnpjFormatter: CnpjFormatter;

  constructor() {
    this.utils = new Utils();
    this.cnpjFormatter = new CnpjFormatter();
  }

  /**
 * Check if value is a valid CNPJ.
 * @example ```js
 * CnpjValidator.isValid('13.313.846/0001-23');
 * //=> true
 *
 * CnpjValidator.isValid('13313846000123');
 * //=> true
 *
 * CnpjValidator.isValid('13.313.846/0001-25');
 * //=> false
 *
 * CnpjValidator.isValid('13313846000125');
 * //=> false
 *
 * CnpjValidator.isValid('11.111.111/1111-11');
 * //=> false
 * ```
 * @param value A `string` with CNPJ numbers. Can be formatted or unformatted.
 */
  isValid(value: string) {
    if (!this.cnpjFormatter.isFormattable(value)) return false;

    const numbers = this.utils.mapToNumbers(value);
    if (this.utils.isRepeatedArray(numbers)) return false;

    const checkers = this.utils.generateCheckSums(numbers, this.CNPJ_VALIDATORS);

    return (
      numbers[12] === this.utils.getRemaining(checkers[0])
      && numbers[13] === this.utils.getRemaining(checkers[1])
    );
  }
}

export default CnpjValidator;
