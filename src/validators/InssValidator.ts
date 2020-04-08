import { Validator } from './Validator';
import { InssFormatter } from '../formatters';
import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

/**
 * The INSS validator.
 */
@ValidatorConstraint({ name: "inss", async: false })
class InssValidator implements Validator, ValidatorConstraintInterface {

  private inssFormatter: InssFormatter;

  constructor() {
    this.inssFormatter = new InssFormatter();
  }

  /**
 * Check if value is a valid INSS.
 * @example ```js
 * InssValidator.validate('11.111.11111/11');
 * //=> true
 *
 * InssValidator.validate('111111111111');
 * //=> true
 *
 * InssValidator.validate('11.111.11111');
 * //=> false
 *
 * InssValidator.validate('11111');
 * //=> false
 * ```
  * @param value A `string` with INSS numbers. Can be formatted or unformatted.
  * @param validationArguments The <ValidationArguments> object
  */
 validate(value: any, validationArguments?: ValidationArguments): boolean {
    return this.isValid(value);
  }

  /**
   * The default validation error message
   * @param args Validation arguments
   */
  defaultMessage(args: ValidationArguments): string {
    return "The ($property) property with ($value) value is invalid!";
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
 * @deprecated Use 'validate' instead.
 */
  isValid(value: string) {
    return this.inssFormatter.isFormattable(value);
  }
}

export default InssValidator;
