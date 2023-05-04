jqExt - jQuery Extensions
=========================

jqExt is a collection of utility methods that extend the functionality of core JavaScript classes, while following the guidelines of the Ruby API. Additionally, there are some minor extensions to the jQuery framework.

API Documentation and Release Notes
-----------------------------------

The API documentation and release notes can be found in the project's [wiki](https://github.com/alextk/jqExt/wiki/).

Pre-Compiled Scripts
--------------------

If you're not interested in compiling your own version of jqExt, pre-compiled scripts are available in the [dist](https://github.com/alextk/jqExt/tree/master/dist/) directory. Simply grab the one you need to get started quickly.

Getting Started with Development
--------------------------------

To set up your development environment for jqExt, follow these steps:

1.  Make sure you have Node.js installed on your system.
2.  Clone this repository or download the zip file and extract it to your preferred location.
3.  Open the terminal or command prompt and navigate to the project directory.
4.  Run `npm install` to install all the necessary dependencies.

### Adding Files to the `src` Directory

The `src` directory contains the source files for jqExt. If you want to modify or add to jqExt's functionality, you'll need to add your own files to this directory.

The `bundle.js` file in the `src` directory is the entry point for jqExt. It imports all the necessary files from the other directories in `src`. If you want to add your own files to jqExt, you must import them into `bundle.js` or create your own entry point and import it into `bundle.js`.

Building jqExt
--------------

To build jqExt, follow these steps:

1.  Make sure you have installed the necessary dependencies as described in the previous section.
2.  Navigate to the project directory in the terminal or command prompt.
3.  Run `npm run build` to build the project using esbuild.

This command will use the `build.mjs` script in the project root directory to create two new files in the `dist` directory:

*   `dist/jquery.jqext-${version}.js`
*   `dist/jquery.jqext-${version}.min.js`

Please note that the `version` variable is defined in your `package.json` file, and `build_number` is generated during the build process.

License and Acknowledgments
---------------------------

jqExt is dual-licensed under the MIT and GPLv2 licenses. Special thanks to Alex Tkachev for creating jqExt.