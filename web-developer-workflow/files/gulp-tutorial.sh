#!/bin/bash

#TUTORIAL FOR GULP

# 1. GULP needs to be installed globally on computer and in project
# 2. GULP needs a file gulpfile.js - check: /opt/lampp/htdocs/web-developer-workflow/gulpfile.js
# 3. In gulpfile.js you need to import into a variable the package

# CASE 	install gulp globally ======================================>
sudo npm install gulp-cli --global

# CASE: install gulp into project ==================================>
# from the project root folder
npm install gulp -save-dev

# CASE: Install Gulp-watch ==================================>
npm install gulp-watch --save-dev

# for further packages check package.json
# for package usage check /opt/lampp/htdocs/web-developer-workflow/gulpfile.js
