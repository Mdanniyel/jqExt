import { readFileSync, writeFileSync } from 'fs'
import * as esbuild from 'esbuild'

// read package.json and take from it the package name, description and version
let package_json = JSON.parse(readFileSync('package.json', 'utf8'))
package_json.build_number += 1
let { name, description, version } = package_json

let banner = `/*
* ${name} - ${description}
*
* Version: ${version}
* Build: ${package_json.build_number}
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

// update build number in package.json
writeFileSync('package.json', JSON.stringify(package_json, null, 2))