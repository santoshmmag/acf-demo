import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://nextwordpress.mmag.in/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        // 'typescript-react-apollo' // if using Apollo
      ],
    },
  },
};

export default config;