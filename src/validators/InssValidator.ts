import { Validator } from './Validator';
import { InssFormatter } from '../formatters';

/**
 * The INSS validator.
 */
class InssValidator implements Validator {

  private inssFormatter: InssFormatter;

  constructor() {
    this.inssFormatter = new InssFormatter();
  }

  /**
 * Check if value is a valid INSS.
 * @example ```js
 * InssValidator.isValid('11.111.11111/11');
 * //=> true
 *
 * InssValidator.isValid('111111111111');
 * //=> true
 *
 * InssValidator.isValid('11.111.11111');
 * //=> false
 *
 * InssValidator.isValid('11111');
 * //=> false
 * ```
 * @param value A `string` with INSS numbers. Can be formatted or unformatted.
 */
  isValid(value: string) {
    return this.inssFormatter.isFormattable(value);
  }
}

export default InssValidator;
