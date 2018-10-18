#!/bin/bash

#NPM USAGE
# To have fodler tree set npm set legacy-bundling=true


# 1 IN GENERAL

# CASE: Download from  NPM ==================================>
npm install jquery

# CASE: Initialise Npm Organization Json ====================>
npm init

# CASE: Download with with writing into json organizer =====>
npm install normalize.css --save

# CASE: Reinstall json organizer/dependencies content =======>
npm install

# CASE: Same as above but: Nested installation ================>
npm install --legacy-bundling

# CASE: install gulp into project ==================================>
# from the project root folder
npm install gulp -save-dev




# CONFIGURATIONS TAKSKS

# CASE: Print the configuration ==================================>
npm config list

# CASE: Force to build nested dependency tree ==================>
npm set legacy-bundling=true
