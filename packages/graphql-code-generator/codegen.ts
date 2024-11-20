import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true, // Whether to overwrite existing files
  schema: `${process.env['GRAPHQL_API_URL'] || 'http://localhost:3333'}/graphql`, // GraphQL API endpoint URL from environment variables
  generates: {
    './src/lib/': {
      // Output directory for generated files
      preset: 'client', // Use the client preset for generating TypeScript types
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] }, // Run prettier after file generation
};

export default config;
