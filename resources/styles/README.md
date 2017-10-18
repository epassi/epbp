styles
====

Keep styles (SCSS files) in this directory. SCSS is preprocessed by the `gulp styles` task.

3 kinds of files:

* Index 
* Global import files
* Component import files

### Index

**index.scss** is the main SCSS file. It should only be importing other SCSS files.

### Global import files

Styles and variables shared throughout prototype:

* _base.scss 
* _color.scss
* _fonts.scss
* _grid.scss
* _motion.scss
* _reset.scss 

### Component import files

Styles and variables unique to prototype components (interface elements). These belong in the **components** directory.

* Each SCSS file should represent a single component.
* Use the component name as the filename, and lead with an underscore (ex: *_my-component.scss*).
* Use BEM notation for naming classes (*.block__element--modifer*). The block portion of the class name should match the component name (ex: all classes in *_my-component.scss* would start with *.my-component__*).
* Use separate classes for modifers like "active" or "disabled" (ex: *.my-component__element .is-active*).

**_prototype.scss** is used for the body element class.