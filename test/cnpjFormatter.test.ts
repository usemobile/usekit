import test from 'ava';
import { CnpjFormatter } from '../src/usekit';

const VALID_FORMATTED_CNPJ = '00.000.000/0000-00';
const VALID_UNFORMATTED_CNPJ = '00000000000000';
const INVALID_FORMAT_CNPJ = '0000';

const cnpjFormatter = new CnpjFormatter();

test('should format CNPJ', (context) => {
  context.is(cnpjFormatter.format(VALID_UNFORMATTED_CNPJ), VALID_FORMATTED_CNPJ);
  context.is(cnpjFormatter.format(VALID_FORMATTED_CNPJ), VALID_FORMATTED_CNPJ);
  context.is(cnpjFormatter.format(INVALID_FORMAT_CNPJ), INVALID_FORMAT_CNPJ);
});

test('should unformat CNPJ', (context) => {
  context.is(cnpjFormatter.unformat(VALID_UNFORMATTED_CNPJ), VALID_UNFORMATTED_CNPJ);
  context.is(cnpjFormatter.unformat(VALID_FORMATTED_CNPJ), VALID_UNFORMATTED_CNPJ);
  context.is(cnpjFormatter.unformat(INVALID_FORMAT_CNPJ), INVALID_FORMAT_CNPJ);
});

test('should check if CNPJ isFormatted', (context) => {
  context.is(cnpjFormatter.isFormatted(VALID_UNFORMATTED_CNPJ), false);
  context.is(cnpjFormatter.isFormatted(VALID_FORMATTED_CNPJ), true);
  context.is(cnpjFormatter.isFormatted(INVALID_FORMAT_CNPJ), false);
});

test('should check if CNPJ isUnformatted', (context) => {
  context.is(cnpjFormatter.isUnformatted(VALID_UNFORMATTED_CNPJ), true);
  context.is(cnpjFormatter.isUnformatted(VALID_FORMATTED_CNPJ), false);
  context.is(cnpjFormatter.isUnformatted(INVALID_FORMAT_CNPJ), false);
});

test('should check if CNPJ isFormattable', (context) => {
  context.is(cnpjFormatter.isFormattable(VALID_UNFORMATTED_CNPJ), true);
  context.is(cnpjFormatter.isFormattable(VALID_FORMATTED_CNPJ), true);
  context.is(cnpjFormatter.isFormattable(INVALID_FORMAT_CNPJ), false);
});
