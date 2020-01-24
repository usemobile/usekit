import { Formats, BaseFormatter } from './BaseFormatter';

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

class CpfFormatter extends BaseFormatter {
  constructor() {
    super(cpfFormats);
  }
}

export default new CpfFormatter();
