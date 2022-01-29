const esbuild = require('esbuild');

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    // outdir: 'build',
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    platform: 'browser',
    splitting: false,
    sourcemap: true,
    target: 'esnext',
    format: 'esm',
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
