// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/app.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs', // Set the format to "es"
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
  ],
};
