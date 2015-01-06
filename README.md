epbp
====

LESS-based boilerplate for personal prototyping projects. Includes:
- A set of LESS files for managing media queries.
- Gruntfile for compiling LESS files and maintaining a separate distribution folder.
- Bower.js for jQuery and Handlebars.

#### First-time setup (do this once only)
Before running the new-site setup below, you'll need to install a few utilities.

1. Install Node.js: http://nodejs.org/
2. Install Grunt command line interface: in Terminal, run `sudo npm install -g grunt-cli`.
3. Install Bower package management utility: in Terminal, run `sudo npm install -g bower`.

#### Setting up a new site
1. In Terminal, navigate to the folder that will contain your new project folder (e.g. ~/Sites in Mac OS X).
2. Run `git clone epbp "<new site folder name>"`. A new folder will appear using your site folder name.
3. Navigate to the src folder.
4. Run `npm install`. A node_modules folder will be added to your src folder.
5. Run `bower install`. A vendor folder will be added to your src folder.
6. Run `grunt`. Grunt will automatically create a dist folder alongside your src folder, and a browser will open and track changes to your site.
