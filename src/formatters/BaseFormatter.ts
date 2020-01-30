/**
 * The format pattern type. It is formed by what is
 * necessary for the formatter to use the formats
 * for operations.
 */
export type Format = {
  /**
   * A RegEx containing the format pattern.
   */
  pattern: RegExp;
  /**
   * A `string` with the replacement groups.
   * @example ```js
   * // The CPF formatted replacement, contains
   * // the group of numbers, separated by his mask of symbols
   * const cpfFormattedReplacement = "$1.$2.$3-$4" ;
   * ```
   */
  replacement: string;
}

/**
 * Interface of the formats. Encapsulates his patterns
 * of formats in formatted and unformatted forms.
 */
export interface Formats {
  /**
   * The Format Pattern in his formatted style.
   */
  formatted: Format;
  /**
   * The Format Pattern in his unformatted style.
   */
  unformatted: Format;
}

/**
 * Interface of the Formatters.
 */
export interface Formatter {
  /**
   * Formats an value accordingly with this formatter.
   * @param value The value to be formatted.
   */
  format(value: string): string;

  /**
   * Unformats an value accordingly with this formatter.
   * @param value The value to be formatted.
   */
  unformat(value: string): string;

  /**
   * Checks if the value is formatted.
   * @param value The value to be checked.
   */
  isFormatted(value: string): boolean;

  /**
   * Checks if the value is unformatted.
   * @param value The value to be checked.
   */
  isUnformatted(value: string): boolean;

  /**
   * Checks if the value is formatable, that is,
   * if it is formatted or unformatted .
   * @param value The value to be checked.
   */
  isFormattable(value: string): boolean;
}

/**
 * Base formatter. Encapsulates all the generic formatting rules.
 * @param formats The formats to be used by the Formatter
 */
export class BaseFormatter implements Formatter {
  /**
   * The Format Pattern in his formatted style.
   */
  formatted: Format;
  /**
   * The Format Pattern in his unformatted style.
   */
  unformatted: Format;

  constructor(formats: Formats) {
    this.formatted = formats.formatted;
    this.unformatted = formats.unformatted;
  }

  /**
   * @inheritdoc Formatter.isFormatted
   */
  isFormatted(value: string): boolean {
    return this.formatted.pattern.test(value);
  }

  /**
   * @inheritdoc Formatter.isUnformatted
   */
  isUnformatted(value: string): boolean {
    return this.unformatted.pattern.test(value);
  }

  /**
   * @inheritdoc Formatter.isFormattable
   */
  isFormattable(value: string): boolean {
    return this.isFormatted(value) || this.isUnformatted(value);
  }

  /**
   * @inheritdoc Formatter.format
   */
  format(value: string): string {
    if (!this.isFormattable(value)) return value;
    return this.isFormatted(value)
      ? value
      : value.replace(this.unformatted.pattern, this.formatted.replacement);
  }

  /**
   * @inheritdoc Formatter.unformat
   */
  unformat(value: string): string {
    if (!this.isFormattable(value)) return value;
    return this.isUnformatted(value)
      ? value
      : value.replace(this.formatted.pattern, this.unformatted.replacement);
  }
}

export default BaseFormatter;
