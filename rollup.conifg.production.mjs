import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/app.ts',
  output: {
    file: production ? 'production/bundle.min.js' : 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
    name: 'StellaMunda',
    globals: {
      express: 'express',
    },
  },
  external: ['express'],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),
    commonjs(),
    resolve(),
    json(),
    // ... other plugins
    production && terser(),
  ],
};
