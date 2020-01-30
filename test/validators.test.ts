import test from 'ava';
import { CpfValidator } from '../src/usekit';

const cpfValidator = new CpfValidator();
const VALID_FORMATTED_CPF = '419.452.849-27';
const VALID_UNFORMATTED_CPF = '41945284927';
const INVALID_FORMATTED_CPF = '000.000.000-00';
const INVALID_UNFORMATTED_CPF = '00000000000';
const INVALID_FORMAT_CPF = '0000';

test('should validate an CPF', context => {
  context.true(cpfValidator.isValid(VALID_UNFORMATTED_CPF));
  context.true(cpfValidator.isValid(VALID_FORMATTED_CPF));
  context.false(cpfValidator.isValid(INVALID_FORMAT_CPF));
  context.false(cpfValidator.isValid(INVALID_FORMATTED_CPF));
  context.false(cpfValidator.isValid(INVALID_UNFORMATTED_CPF));
});
