import { Formats, BaseFormatter } from './BaseFormatter';

/**
 * The CEP formats.
 */
const cepFormats: Formats = {
  formatted: {
    pattern: /^(\d{5})-(\d{3})$/m,
    replacement: '$1-$2',
  },
  unformatted: {
    pattern: /^(\d{5})(\d{3})$/m,
    replacement: '$1$2',
  }
};

/**
 * Maintains the Formatter operations for CEP.
 * @example ```js
 * CepFormatter.format('15998030')
 * //=> '15998-030'
 *
 * CepFormatter.unformat('15998-030')
 * //=> '15998030'
 *
 * CepFormatter.isFormatted('15998-030')
 * //=> 'true'
 *
 * CepFormatter.isUnformatted('15998-030')
 * //=> 'false'
 *
 * CepFormatter.isFormattable('15998-030')
 * //=> 'true'
 *
 * CepFormatter.isFormattable('15998-03')
 * //=> 'false'
 * ```
 */
class CepFormatter extends BaseFormatter {
  constructor() {
    super(cepFormats);
  }
}

export default CepFormatter;
