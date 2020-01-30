import { Formats, BaseFormatter } from './BaseFormatter';

/**
 * The CPF formats
 */
const cpfFormats: Formats = {
  formatted: {
    pattern: /^(\d{3})[.](\d{3})[.](\d{3})-(\d{2})$/m,
    replacement: '$1.$2.$3-$4',
  },
  unformatted: {
    pattern: /^(\d{3})(\d{3})(\d{3})(\d{2})$/m,
    replacement: '$1$2$3$4',
  }
};

/**
 * Maintains the Formatter operations for CPF.
 * @example ```js
 * CpfFormatter.format('46307274000')
 * //=> '463.072.740-00'
 *
 * CpfFormatter.unformat('463.072.740-00')
 * //=> '46307274000'
 *
 * CpfFormatter.isFormatted('463.072.740-00')
 * //=> 'true'
 *
 * CpfFormatter.isUnformatted('463.072.740-00')
 * //=> 'false'
 *
 * CpfFormatter.isFormattable('463.072.740-00')
 * //=> 'true'
 *
 * CpfFormatter.isFormattable('072.740-00')
 * //=> 'false'
 * ```
 */
class CpfFormatter extends BaseFormatter {
  constructor() {
    super(cpfFormats);
  }
}

export default CpfFormatter;
