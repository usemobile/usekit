import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  banner: true,
  input: 'src/usekit.ts',
  output: {
    format: [
      'es',
      'cjs'
    ],
    moduleName: 'Usekit'
  },
  plugins: {
    'typescript2': {
      clean: true,
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
