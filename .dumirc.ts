import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'dumi-monorepo',
  },
  resolve: {
    atomDirs: [{ type: 'component', dir: 'packages/components/src' }],
  },
  alias: {
    '@wode673/components': require.resolve('./packages/components/src'),
  },
});
