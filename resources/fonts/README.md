fonts 
====

Keep custom font styles (SCSS) and files in this directory.

* **styles/_fonts.scss** is the root font style file. Use that file to add hosted fonts.
* Include a single SCSS file for each custom font family, and lead the file with an underscore (ex: CustomFontRegular, CustomFontItalic, CustomFontBold would be defined in *_CustomFont.scss*).
* Keep the font files (EOT, SVG, TTF, WOFF) in this directory and make sure the style url's are relative to **resources/styles/index.scss** (ex: *url('../fonts/custom-font-regular.ttf')*)