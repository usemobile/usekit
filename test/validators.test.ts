import test from 'ava';
import { CpfValidator, CnpjValidator, CepValidator, InssValidator } from '../src/usekit';

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

const inssValidator = new InssValidator();
const VALID_FORMATTED_INSS = '11.111.11111/11';
const VALID_UNFORMATTED_INSS = '111111111111';
const INVALID_FORMAT_INSS = '0000';

test('should validate an CPF', context => {
  context.true(cpfValidator.validate(VALID_UNFORMATTED_CPF));
  context.true(cpfValidator.validate(VALID_FORMATTED_CPF));
  context.false(cpfValidator.validate(INVALID_FORMAT_CPF));
  context.false(cpfValidator.validate(INVALID_FORMATTED_CPF));
  context.false(cpfValidator.validate(INVALID_UNFORMATTED_CPF));
});

test('should validate an CNPJ', context => {
  context.true(cnpjValidator.validate(VALID_UNFORMATTED_CNPJ));
  context.true(cnpjValidator.validate(VALID_FORMATTED_CNPJ));
  context.false(cnpjValidator.validate(INVALID_FORMAT_CNPJ));
  context.false(cnpjValidator.validate(INVALID_FORMATTED_CNPJ));
  context.false(cnpjValidator.validate(INVALID_UNFORMATTED_CNPJ));
});

test('should validate an CEP', context => {
  context.true(cepValidator.validate(VALID_UNFORMATTED_CEP));
  context.true(cepValidator.validate(VALID_FORMATTED_CEP));
  context.false(cepValidator.validate(INVALID_FORMAT_CEP));
});

test('should validate an INSS', context => {
  context.true(inssValidator.validate(VALID_UNFORMATTED_INSS));
  context.true(inssValidator.validate(VALID_FORMATTED_INSS));
  context.false(inssValidator.validate(INVALID_FORMAT_INSS));
});
