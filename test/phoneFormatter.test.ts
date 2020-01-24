import test from 'ava';
import { phoneFormatter } from '../src/usekit';

const VALID_FORMATTED_PHONE = '(00) 0 0000-0000';
const VALID_UNFORMATTED_PHONE = '00000000000';
const INVALID_FORMAT_PHONE = '0000';

test('should format PHONE', (context) => {
  context.is(phoneFormatter.format(VALID_UNFORMATTED_PHONE), VALID_FORMATTED_PHONE);
  context.is(phoneFormatter.format(VALID_FORMATTED_PHONE), VALID_FORMATTED_PHONE);
  context.is(phoneFormatter.format(INVALID_FORMAT_PHONE), INVALID_FORMAT_PHONE);
});

test('should unformat PHONE', (context) => {
  context.is(phoneFormatter.unformat(VALID_UNFORMATTED_PHONE), VALID_UNFORMATTED_PHONE);
  context.is(phoneFormatter.unformat(VALID_FORMATTED_PHONE), VALID_UNFORMATTED_PHONE);
  context.is(phoneFormatter.unformat(INVALID_FORMAT_PHONE), INVALID_FORMAT_PHONE);
});

test('should check if PHONE isFormatted', (context) => {
  context.is(phoneFormatter.isFormatted(VALID_UNFORMATTED_PHONE), false);
  context.is(phoneFormatter.isFormatted(VALID_FORMATTED_PHONE), true);
  context.is(phoneFormatter.isFormatted(INVALID_FORMAT_PHONE), false);
});

test('should check if PHONE isUnformatted', (context) => {
  context.is(phoneFormatter.isUnformatted(VALID_UNFORMATTED_PHONE), true);
  context.is(phoneFormatter.isUnformatted(VALID_FORMATTED_PHONE), false);
  context.is(phoneFormatter.isUnformatted(INVALID_FORMAT_PHONE), false);
});

test('should check if PHONE isFormattable', (context) => {
  context.is(phoneFormatter.isFormattable(VALID_UNFORMATTED_PHONE), true);
  context.is(phoneFormatter.isFormattable(VALID_FORMATTED_PHONE), true);
  context.is(phoneFormatter.isFormattable(INVALID_FORMAT_PHONE), false);
});
