import test from 'ava';
import { BaseFormatter } from '../src/usekit';

const VALID_FORMATTED_CUSTOM = '000-000';
const VALID_UNFORMATTED_CUSTOM = '000000';
const INVALID_FORMAT_CUSTOM = '0000';

const CUSTOM_FORMATS = {
  formatted: {
    pattern: /^(\d{3})-(\d{3})$/m,
    replacement: '$1-$2',
  },
  unformatted: {
    pattern: /^(\d{3})(\d{3})$/m,
    replacement: '$1$2',
  }
};

const customFormatter = new BaseFormatter(CUSTOM_FORMATS);

test('should format CUSTOM', (context) => {
  context.is(customFormatter.format(VALID_UNFORMATTED_CUSTOM), VALID_FORMATTED_CUSTOM);
  context.is(customFormatter.format(VALID_FORMATTED_CUSTOM), VALID_FORMATTED_CUSTOM);
  context.is(customFormatter.format(INVALID_FORMAT_CUSTOM), INVALID_FORMAT_CUSTOM);
});

test('should unformat CUSTOM', (context) => {
  context.is(customFormatter.unformat(VALID_UNFORMATTED_CUSTOM), VALID_UNFORMATTED_CUSTOM);
  context.is(customFormatter.unformat(VALID_FORMATTED_CUSTOM), VALID_UNFORMATTED_CUSTOM);
  context.is(customFormatter.unformat(INVALID_FORMAT_CUSTOM), INVALID_FORMAT_CUSTOM);
});

test('should check if CUSTOM isFormatted', (context) => {
  context.is(customFormatter.isFormatted(VALID_UNFORMATTED_CUSTOM), false);
  context.is(customFormatter.isFormatted(VALID_FORMATTED_CUSTOM), true);
  context.is(customFormatter.isFormatted(INVALID_FORMAT_CUSTOM), false);
});

test('should check if CUSTOM isUnformatted', (context) => {
  context.is(customFormatter.isUnformatted(VALID_UNFORMATTED_CUSTOM), true);
  context.is(customFormatter.isUnformatted(VALID_FORMATTED_CUSTOM), false);
  context.is(customFormatter.isUnformatted(INVALID_FORMAT_CUSTOM), false);
});

test('should check if CUSTOM isFormattable', (context) => {
  context.is(customFormatter.isFormattable(VALID_UNFORMATTED_CUSTOM), true);
  context.is(customFormatter.isFormattable(VALID_FORMATTED_CUSTOM), true);
  context.is(customFormatter.isFormattable(INVALID_FORMAT_CUSTOM), false);
});
