import {build} from 'esbuild';
await build({entryPoints:['src/game.js'],bundle:true,minify:true,format:'iife',target:['es2020'],outfile:'dist/game.js',legalComments:'eof'});
