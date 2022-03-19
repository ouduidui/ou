import * as esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  minify: true,
  entryPoints: ['./index.js'],
  outfile: './index.cjs',
  format: 'cjs',
  platform: 'node',
  target: 'node14',
})
