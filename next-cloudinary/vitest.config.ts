import { defineConfig } from 'vitest/config';
import pkg from './package.json';

export default defineConfig({
  // Mirror tsup's define so tests can resolve the build-time constant
  define: {
    __NEXT_CLOUDINARY_VERSION__: JSON.stringify(pkg.version),
  },
});
