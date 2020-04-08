import { Validator } from './Validator';
import { CepFormatter } from '../formatters';

/**
 * The CEP validator.
 */
class CepValidator implements Validator {

  private cepFormatter: CepFormatter;

  constructor() {
    this.cepFormatter = new CepFormatter();
  }

  /**
 * Check if value is a valid CEP.
 * @example ```js
 * CepValidator.isValid('35400-000');
 * //=> true
 *
 * CepValidator.isValid('35400000');
 * //=> true
 *
 * CepValidator.isValid('35400-0000');
 * //=> false
 *
 * CepValidator.isValid('354000000');
 * //=> false
 * ```
 * @param value A `string` with CEP numbers. Can be formatted or unformatted.
 */
  isValid(value: string) {
    return this.cepFormatter.isFormattable(value);
  }
}

export default CepValidator;
