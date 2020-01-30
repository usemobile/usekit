import test from 'ava';
import { CpfValidator, CnpjValidator, CepValidator } from '../src/usekit';

const cpfValidator = new CpfValidator();
const VALID_FORMATTED_CPF = '419.452.849-27';
const VALID_UNFORMATTED_CPF = '41945284927';
const INVALID_FORMATTED_CPF = '000.000.000-00';
const INVALID_UNFORMATTED_CPF = '00000000000';
const INVALID_FORMAT_CPF = '0000';

const cnpjValidator = new CnpjValidator();
const VALID_FORMATTED_CNPJ = '02.343.733/0001-54';
const VALID_UNFORMATTED_CNPJ = '02343733000154';
const INVALID_FORMATTED_CNPJ = '00.000.000/0000-00';
const INVALID_UNFORMATTED_CNPJ = '00000000000000';
const INVALID_FORMAT_CNPJ = '0000';

const cepValidator = new CepValidator();
const VALID_FORMATTED_CEP = '35400-000';
const VALID_UNFORMATTED_CEP = '35400000';
const INVALID_FORMAT_CEP = '0000';

test('should validate an CPF', context => {
  context.true(cpfValidator.isValid(VALID_UNFORMATTED_CPF));
  context.true(cpfValidator.isValid(VALID_FORMATTED_CPF));
  context.false(cpfValidator.isValid(INVALID_FORMAT_CPF));
  context.false(cpfValidator.isValid(INVALID_FORMATTED_CPF));
  context.false(cpfValidator.isValid(INVALID_UNFORMATTED_CPF));
});

test('should validate an CNPJ', context => {
  context.true(cnpjValidator.isValid(VALID_UNFORMATTED_CNPJ));
  context.true(cnpjValidator.isValid(VALID_FORMATTED_CNPJ));
  context.false(cnpjValidator.isValid(INVALID_FORMAT_CNPJ));
  context.false(cnpjValidator.isValid(INVALID_FORMATTED_CNPJ));
  context.false(cnpjValidator.isValid(INVALID_UNFORMATTED_CNPJ));
});

test('should validate an CEP', context => {
  context.true(cepValidator.isValid(VALID_UNFORMATTED_CEP));
  context.true(cepValidator.isValid(VALID_FORMATTED_CEP));
  context.false(cepValidator.isValid(INVALID_FORMAT_CEP));
});
