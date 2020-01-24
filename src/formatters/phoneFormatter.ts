import { Formats, BaseFormatter } from './BaseFormatter';

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

class PhoneFormatter extends BaseFormatter {
  constructor() {
    super(phoneFormats);
  }
}

export default new PhoneFormatter();
