import { Validator } from './Validator';
import { CnpjFormatter } from '../formatters';
import Utils from '../utils';
import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";

/**
 * The CNPJ validator.
 */
@ValidatorConstraint({ name: "cnpj", async: false })
class CnpjValidator implements Validator, ValidatorConstraintInterface {

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
   * CnpjValidator.validate('366.418.768-70');
   * //=> true
   *
   * CnpjValidator.validate('36641876870');
   * //=> true
   *
   * CnpjValidator.validate('213.198.013-20');
   * //=> false
   *
   * CnpjValidator.validate('2131201872781');
   * //=> false
   *
   * CnpjValidator.validate('11111111111');
   * //=> false
   * ```
   * @param value A `string` with CNPJ numbers. Can be formatted or unformatted.
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
 * @deprecated Use 'validate' instead.
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
