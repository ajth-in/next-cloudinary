import { defineConfig, Options } from 'tsup'
import { plugin as CopyAssetsPlugin } from './plugins/copy-assets';
import pkg from './package.json';

const commonConfig: Options = {
  dts: true,
  external: ['react'],
  format: ['esm', 'cjs'],
  minify: true,
  sourcemap: true,
  // Inline the version instead of importing package.json into the bundle
  define: {
    __NEXT_CLOUDINARY_VERSION__: JSON.stringify(pkg.version),
  },
};

export default defineConfig([
  {
    ...commonConfig,
    entry: ['src/index.ts'],
    esbuildPlugins: [CopyAssetsPlugin] // Add plugin to copy assets on one of the entrypoints
  }
]);