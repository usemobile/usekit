import { Formats, BaseFormatter } from './BaseFormatter';

/**
 * The CNPJ formats.
 */
const cnpjFormats: Formats = {
  formatted: {
    pattern: /^(\d{2})[.](\d{3})[.](\d{3})[/](\d{4})-(\d{2})$/m,
    replacement: '$1.$2.$3/$4-$5',
  },
  unformatted: {
    pattern: /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/m,
    replacement: '$1$2$3$4$5',
  }
};

/**
 * Maintains the Formatter operations for CNPJ.
 * @example ```js
 * CnpjFormatter.format('86537263000150')
 * //=> '86.537.263/0001-50'
 *
 * CnpjFormatter.unformat('86.537.263/0001-50')
 * //=> '86537263000150'
 *
 * CnpjFormatter.isFormatted('86.537.263/0001-50')
 * //=> 'true'
 *
 * CnpjFormatter.isUnformatted('86.537.263/0001-50')
 * //=> 'false'
 *
 * CnpjFormatter.isFormattable('86.537.263/0001-50')
 * //=> 'true'
 *
 * CnpjFormatter.isFormattable('86.537.263/0001')
 * //=> 'false'
 * ```
 */
class CnpjFormatter extends BaseFormatter {
  constructor() {
    super(cnpjFormats);
  }
}

export default CnpjFormatter;
