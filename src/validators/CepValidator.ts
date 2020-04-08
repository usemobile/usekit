import { Validator } from './Validator';
import { CepFormatter } from '../formatters';
import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

/**
 * The CEP validator.
 */
@ValidatorConstraint({ name: "cep", async: false })
class CepValidator implements Validator, ValidatorConstraintInterface {

  private cepFormatter: CepFormatter;

  constructor() {
    this.cepFormatter = new CepFormatter();
  }

  /**
  * Check if value is a valid CEP.
  * @example ```js
  * CepValidator.validate('35400-000');
  * //=> true
  *
  * CepValidator.validate('35400000');
  * //=> true
  *
  * CepValidator.validate('35400-0000');
  * //=> false
  *
  * CepValidator.validate('354000000');
  * //=> false
  * ```
  * @param value A `string` with CEP numbers. Can be formatted or unformatted.
  * @param validationArguments The <ValidationArguments> object
  */
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    return this.cepFormatter.isFormattable(value);
  }

  /**
   * The default validation error message
   * @param args Validation arguments
   */
  defaultMessage(args: ValidationArguments): string {
    return "The ($property) property with ($value) value is invalid!";
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
 * @deprecated Use 'validate' instead.
 */
  isValid(value: string) {
    return this.cepFormatter.isFormattable(value);
  }
}

export default CepValidator;
