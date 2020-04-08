import { Formats, BaseFormatter } from './BaseFormatter';

/**
 * The INSS formats.
 */
const inssFormats: Formats = {
  formatted: {
    pattern: /^(\d{2}).(\d{3}).(\d{5})[/](\d{2})$/m,
    replacement: '$1.$2.$3/$4',
  },
  unformatted: {
    pattern: /^(\d{2})(\d{3})(\d{5})(\d{2})$/m,
    replacement: '$1$2$3$4',
  }
};

/**
 * Maintains the Formatter operations for INSS.
 * @example ```js
 * InssFormatter.format('111111111111')
 * //=> '11.111.11111/11'
 *
 * InssFormatter.unformat('11.111.11111/11')
 * //=> '111111111111'
 *
 * InssFormatter.isFormatted('11.111.11111/11')
 * //=> 'true'
 *
 * InssFormatter.isUnformatted('11.111.11111/11')
 * //=> 'false'
 *
 * InssFormatter.isFormattable('11.111.11111/11')
 * //=> 'true'
 *
 * InssFormatter.isFormattable('111111-03')
 * //=> 'false'
 * ```
 */
class InssFormatter extends BaseFormatter {
  constructor() {
    super(inssFormats);
  }
}

export default InssFormatter;
