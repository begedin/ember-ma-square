# Structure

The root folder of an ember-addon contains the following which we're using:

* `package.json`
* `bower.json`
* `component.js`
  * moved to `/app/components/${addon-name}.js` at build time
* `index.js`
  * this is where we use hooks to modify the conventions around file structure. It's what enables the micro-addon concept
* `template.hbs`
  * moved to `/app/templates/components/${addon-name}.hbs` at build time
* `style.scss`
  * compiled to `style.css`
  * moved to `/addon/styles/${addon-name}.css` at build time. App then concats it into `assets/vendor.css`


Unfortunately, it also contains the following project support files:

* `.bowerrc`
* `.editorconfig`
* `.ember-cli`
* `.gitignore`
* `.jshintrc`
* `.npmignore`
* `.travis.yml`

The files I just listed are mostly ignored via `.npmignore`, so they aren't part of the NPM package. `bower.json` and the `bower_components` folder also aren't part of the NPM package.

The following are project specific:

* `LICENSE.MD`
* `README.MD`
* `MICRO_ADDON_CONCEPT.MD`

The following should, in my opinion, not be moved or removed

* `testem.json`
* `tests` folder - contains test infrastructure including a dummy app to test the addon with. It's used in development only, to run tests on the addon directly, so it's never part of the actual NPM package and has nothing to do with the parent app.

Lastly, there are the folders

* `node_modules`
* `bower_components`

The first is included in the NPM package, while the second is ignored.


# Further steps

* While I don't see a major point in moving the addon tests into a flat structure like the other files, there's a decent argument to do that with the `test-support` folder. To explain, everything inside the addon's `test-support` folder gets merged with the parent app's `tests` folder, so it's a place where various test helpers can be placed. However, since a folder structure is expected within the `test-support` folder, I'm not really sure how to flatten it.