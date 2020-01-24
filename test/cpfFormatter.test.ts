import test from 'ava';
import { cpfFormatter } from '../src/usekit';

const VALID_FORMATTED_CPF = '123.123.123-12';
const VALID_UNFORMATTED_CPF = '12312312312';
const INVALID_FORMAT_CPF = '0000';

test('should format CPF', (context) => {
  context.is(cpfFormatter.format(VALID_UNFORMATTED_CPF), VALID_FORMATTED_CPF);
  context.is(cpfFormatter.format(VALID_FORMATTED_CPF), VALID_FORMATTED_CPF);
  context.is(cpfFormatter.format(INVALID_FORMAT_CPF), INVALID_FORMAT_CPF);
});

test('should unformat CPF', (context) => {
  context.is(cpfFormatter.unformat(VALID_UNFORMATTED_CPF), VALID_UNFORMATTED_CPF);
  context.is(cpfFormatter.unformat(VALID_FORMATTED_CPF), VALID_UNFORMATTED_CPF);
  context.is(cpfFormatter.unformat(INVALID_FORMAT_CPF), INVALID_FORMAT_CPF);
});

test('should check if CPF isFormatted', (context) => {
  context.is(cpfFormatter.isFormatted(VALID_UNFORMATTED_CPF), false);
  context.is(cpfFormatter.isFormatted(VALID_FORMATTED_CPF), true);
  context.is(cpfFormatter.isFormatted(INVALID_FORMAT_CPF), false);
});

test('should check if CPF isUnformatted', (context) => {
  context.is(cpfFormatter.isUnformatted(VALID_UNFORMATTED_CPF), true);
  context.is(cpfFormatter.isUnformatted(VALID_FORMATTED_CPF), false);
  context.is(cpfFormatter.isUnformatted(INVALID_FORMAT_CPF), false);
});

test('should check if CPF isFormattable', (context) => {
  context.is(cpfFormatter.isFormattable(VALID_UNFORMATTED_CPF), true);
  context.is(cpfFormatter.isFormattable(VALID_FORMATTED_CPF), true);
  context.is(cpfFormatter.isFormattable(INVALID_FORMAT_CPF), false);
});
