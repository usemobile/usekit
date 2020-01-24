export type Format = {
  pattern: RegExp;
  replacement: string;
}

export type Formats = {
  formatted: Format;
  unformatted: Format;
}

export type Formatter = {
  format: Function;
  unformat: Function;
  isFormatted: Function;
  isUnformatted: Function;
  isFormattable: Function;
}

export class BaseFormatter implements Formatter {
  formatted: Format;
  unformatted: Format;

  constructor(formats: Formats) {
    this.formatted = formats.formatted;
    this.unformatted = formats.unformatted;
  }

  isFormatted(value: string): boolean {
    return this.formatted.pattern.test(value);
  }

  isUnformatted(value: string): boolean {
    return this.unformatted.pattern.test(value);
  }

  isFormattable(value: string): boolean {
    return this.isFormatted(value) || this.isUnformatted(value);
  }

  format(value: string): string {
    if (!this.isFormattable(value)) return value;
    return this.isFormatted(value)
      ? value
      : value.replace(this.unformatted.pattern, this.formatted.replacement);
  }

  unformat(value: string): string {
    if (!this.isFormattable(value)) return value;
    return this.isUnformatted(value)
      ? value
      : value.replace(this.formatted.pattern, this.unformatted.replacement);
  }
}
