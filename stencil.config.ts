import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';

export const config: Config = {
  namespace: 'swc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [ tailwind() ]
    })
  ]
};
