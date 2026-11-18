import {build} from 'esbuild';
await build({entryPoints:['src/game.js'],bundle:true,minify:true,format:'iife',target:['es2020'],outfile:'dist/game.js',legalComments:'eof'});

await build({entryPoints:['src/character-review/main.js'],bundle:true,minify:true,format:'esm',target:['es2022'],outfile:'dist/character-review/viewer.js',legalComments:'eof'});
