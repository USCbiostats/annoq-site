
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://topmed.api-v2.annoq.org/graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
