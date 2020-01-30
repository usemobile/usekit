import { Formats, BaseFormatter } from './BaseFormatter';

/**
 * The Phone formats.
 */
const phoneFormats: Formats = {
  formatted: {
    pattern: /^[(](\d{2})[)][ ](\d{1})[ ](\d{4})-(\d{4})$/m,
    replacement: '($1) $2 $3-$4',
  },
  unformatted: {
    pattern: /^(\d{2})(\d{1})(\d{4})(\d{4})$/m,
    replacement: '$1$2$3$4',
  }
};

/**
 * Maintains the Formatter operations for Phone.
 * @example ```js
 * PhoneFormatter.format('31988887777')
 * //=> '(31) 9 8888-7777'
 *
 * PhoneFormatter.unformat('(31) 9 8888-7777')
 * //=> '31988887777'
 *
 * PhoneFormatter.isFormatted('(31) 9 8888-7777')
 * //=> 'true'
 *
 * PhoneFormatter.isUnformatted('(31) 9 8888-7777')
 * //=> 'false'
 *
 * PhoneFormatter.isFormattable('(31) 9 8888-7777')
 * //=> 'true'
 *
 * PhoneFormatter.isFormattable('(31) 9 8888')
 * //=> 'false'
 * ```
 */
class PhoneFormatter extends BaseFormatter {
  constructor() {
    super(phoneFormats);
  }
}

export default PhoneFormatter;
