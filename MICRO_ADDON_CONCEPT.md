# How am I trying to implement a micro-addon

* Right now, there's a `component.js`, `template.hbs` and `style.scss` all in the `addon` folder. The reason I put all of them there is mainly so I can find them more easily, since the root is quite poluted with support files.
* The `index.js` (addon entry) has hooks - `treeForApp`, `treeForTemplates` and `treeForStyles` which are called when a list of files is neaded by the parent app in each category.
* The hooks compile properly and provide a correct list of files, however
  * The `component.js` gets renamed to `addon-name.js`, moved to `app/components` and that part works. The component can then be used as `{{addon-name}}` in the app template and any options withing the component script (such as class name bindings) seem to be working.
  * The `template.hbs` gets renamed to `addon-name.hbs`, moved to `app/templates`, but that part doesn't seem to work. There's no error, but the template is not loaded when I use it as `{{addon-name}}`, only the component script is applied.
  * The `style.scss` gets compiled using the built in `Addon.prototype.compileStyles`, but this requires the parent app to depend on `broccoli-sass` so I'm hoping I can change how this works. `style.scss` also gets becomes `addon.css` during the process, which is supposed to be the convention that causes the style to actually get included in the parent app, but it doesn't seem to be working. The documentation surrounding this is poor.

## In addition

It's difficult to debug. The majority of stuff I need to figure out here is during addon/app build time, meaning I can't debug in the browser - it's node code.
