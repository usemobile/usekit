import { Formats, BaseFormatter } from './BaseFormatter';

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

class CnpjFormatter extends BaseFormatter {
  constructor() {
    super(cnpjFormats);
  }
}

export default new CnpjFormatter();
