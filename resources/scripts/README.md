scripts 
====

Keep JavaScript files (ES6 syntax) in this directory. All JavaScript files are merged and minified by the `gulp scripts` task.

* **index.js** should be used as the main file.
* Use `npm` to manage third party libraries (ex: GSAP, D3) then manually add their paths to the `gulp scripts` task.
* The project doesn't use an ES6 transpiler. Avoid unsupported features like ES6 modules (exports/imports) until the release versions of desktop/mobile Chrome and Safari are available.