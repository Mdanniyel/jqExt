// !todo: include version number in dist/jquery.jqext-:version.js
// !todo: include dynamic prefix text that includes version number, build num & build date (like is license.txt is build via old process based on version.yml)
// todo: update readme file

// read version.json, take version number and build number, update built_at date
import { readFileSync, writeFileSync } from 'fs'
import * as esbuild from 'esbuild'

let { name, description, version, build_number } = JSON.parse(readFileSync('package.json', 'utf8'))



let banner = `/*
* ${name} - ${description}
*
* Version: ${version}
* Build: ${build_number}
* Copyright 2011 Alex Tkachev
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: ${new Date().toString().replace(/\s*GMT.*/g, '')}
*/`

await esbuild.build({
  entryPoints: ['src/bundle.js'],
  bundle: true,
  banner: { js: banner },
  outfile: `dist/jquery.jqext-${version}.js`,
})

await esbuild.build({
  entryPoints: ['src/bundle.js'],
  bundle: true,
  minify: true,
  outfile: `dist/jquery.jqext-${version}.min.js`,
})