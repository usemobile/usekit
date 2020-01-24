import { Formats, BaseFormatter } from './BaseFormatter';

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

class CepFormatter extends BaseFormatter {
  constructor() {
    super(cepFormats);
  }
}

export default new CepFormatter();
