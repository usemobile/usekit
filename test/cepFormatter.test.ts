import test from 'ava';
import { cepFormatter } from '../src/usekit';

const VALID_FORMATTED_CEP = '00000-000';
const VALID_UNFORMATTED_CEP = '00000000';
const INVALID_FORMAT_CEP = '0000';

test('should format CEP', (context) => {
  context.is(cepFormatter.format(VALID_UNFORMATTED_CEP), VALID_FORMATTED_CEP);
  context.is(cepFormatter.format(VALID_FORMATTED_CEP), VALID_FORMATTED_CEP);
  context.is(cepFormatter.format(INVALID_FORMAT_CEP), INVALID_FORMAT_CEP);
});

test('should unformat CEP', (context) => {
  context.is(cepFormatter.unformat(VALID_UNFORMATTED_CEP), VALID_UNFORMATTED_CEP);
  context.is(cepFormatter.unformat(VALID_FORMATTED_CEP), VALID_UNFORMATTED_CEP);
  context.is(cepFormatter.unformat(INVALID_FORMAT_CEP), INVALID_FORMAT_CEP);
});

test('should check if CEP isFormatted', (context) => {
  context.is(cepFormatter.isFormatted(VALID_UNFORMATTED_CEP), false);
  context.is(cepFormatter.isFormatted(VALID_FORMATTED_CEP), true);
  context.is(cepFormatter.isFormatted(INVALID_FORMAT_CEP), false);
});

test('should check if CEP isUnformatted', (context) => {
  context.is(cepFormatter.isUnformatted(VALID_UNFORMATTED_CEP), true);
  context.is(cepFormatter.isUnformatted(VALID_FORMATTED_CEP), false);
  context.is(cepFormatter.isUnformatted(INVALID_FORMAT_CEP), false);
});

test('should check if CEP isFormattable', (context) => {
  context.is(cepFormatter.isFormattable(VALID_UNFORMATTED_CEP), true);
  context.is(cepFormatter.isFormattable(VALID_FORMATTED_CEP), true);
  context.is(cepFormatter.isFormattable(INVALID_FORMAT_CEP), false);
});
