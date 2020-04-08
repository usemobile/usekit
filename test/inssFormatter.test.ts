import test from 'ava';
import { InssFormatter } from '../src/usekit';

const VALID_FORMATTED_INSS = '11.111.11111/11';
const VALID_UNFORMATTED_INSS = '111111111111';
const INVALID_FORMAT_INSS = '0000';

const inssFormatter = new InssFormatter();

test('should format INSS', (context) => {
  context.is(inssFormatter.format(VALID_UNFORMATTED_INSS), VALID_FORMATTED_INSS);
  context.is(inssFormatter.format(VALID_FORMATTED_INSS), VALID_FORMATTED_INSS);
  context.is(inssFormatter.format(INVALID_FORMAT_INSS), INVALID_FORMAT_INSS);
});

test('should unformat INSS', (context) => {
  context.is(inssFormatter.unformat(VALID_UNFORMATTED_INSS), VALID_UNFORMATTED_INSS);
  context.is(inssFormatter.unformat(VALID_FORMATTED_INSS), VALID_UNFORMATTED_INSS);
  context.is(inssFormatter.unformat(INVALID_FORMAT_INSS), INVALID_FORMAT_INSS);
});

test('should check if INSS isFormatted', (context) => {
  context.is(inssFormatter.isFormatted(VALID_UNFORMATTED_INSS), false);
  context.is(inssFormatter.isFormatted(VALID_FORMATTED_INSS), true);
  context.is(inssFormatter.isFormatted(INVALID_FORMAT_INSS), false);
});

test('should check if INSS isUnformatted', (context) => {
  context.is(inssFormatter.isUnformatted(VALID_UNFORMATTED_INSS), true);
  context.is(inssFormatter.isUnformatted(VALID_FORMATTED_INSS), false);
  context.is(inssFormatter.isUnformatted(INVALID_FORMAT_INSS), false);
});

test('should check if INSS isFormattable', (context) => {
  context.is(inssFormatter.isFormattable(VALID_UNFORMATTED_INSS), true);
  context.is(inssFormatter.isFormattable(VALID_FORMATTED_INSS), true);
  context.is(inssFormatter.isFormattable(INVALID_FORMAT_INSS), false);
});
