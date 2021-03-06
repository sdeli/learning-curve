#!/bin/bash

#This are the most important commands with examples for git

# in .gitignore you find the files git ignores as best pracitce
# for example node packages

#Important Commands:
			    #git config
			    #git init
			    #git status
			    #git add
			    #git Commit
			    #git checkout
			    #git clone


# CASE 1 Personalize Git ======================================>
git config --global user.email "bgfkszmsdeli@gmail.com"
git config --global user.name "sdeli"

git config user.email "bgfkszmsdeli@gmail.com"
git config user.name "sdeli"

# CASE 1/1 push different config repo ======================================>
git config --local credential.helper ""
git push origin master

# CASE 2 Initialize Git repository ============================>
git init

# CASE 3 Check File Status / If Files have been changed =======>
git status

# CASE 4 Add Changed Files to staging area ======================>
git add filename

# CASE 5 Save / Commit made changes ==============================>
# leave a massage with -m is optional
git commit -m "changed fit-tutorial.sh"

# CASE 6 Restore all files from repository =======================>
git checkout -- .

# CASE 7 Download/Clone Repository from github ====================>
git clone https://github.com/LearnWebCode/welcome-to-git

# CASE 8 Check Origine of Repo ======================================>
git remote -v

# CASE Set Origin where to push/pull ================================>
git remote add origin https://github.com/sdeli/web-scraping.git
git remote add origin https://github.com/sdeli/learning-curve.git
git remote add origin https://github.com/sdeli/node-dev-tut
git remote add origin https://github.com/sdeli/heroku-tut
git remote add origin https://github.com/sdeli/artworks
git remote add origin https://github.com/sdeli/stock-data-tracker.git
git remote add origin https://github.com/sdeli/stock-ticker-extractor
git remote add origin https://github.com/sdeli/social-network
git remote add origin https://github.com/sdeli/learning-curve
git remote add origin https://github.com/sdeli/usr-local-bin.git
git remote add origin https://github.com/sdeli/activity-game-no-angular.git
git remote add origin https://github.com/sdeli/npr
git remote add origin https://github.com/cloudstorm/holiday-calendar-sync.git
git remote add origin https://github.com/sdeli/jackpot-game.git

# CASE Push =============== ======================================>
git push -u origin master

# CASE force pull files from github ================================>
git reset --hard origin/master

# CASE: Remove Git from Project ==================================>
rm -rf .git

# CASE: Create new Branch  ==================================>
git branch branchname

# CASE: Sqitch branch ==================================>
git checkout branchname

# CASE: Delete Branch ==================================>
git branch -d branchname

# CASE: create branch and switch to ==================================>
git checkout -b our-features

# CASE: Merge branch into master with dedicated commit ==================================>
git merge our-features --no-ff

# CASE: ignore node modules ====================================================
sudo touch .gitignore
sudo chmod 777 .gitignore
echo "node_modules/" >> .gitignore

# CASE: delte dir from git repo ====================================================
git rm -r --cached node_modules # path is realtive to the folder you are with terminal
git rm -r --cached node-master/exercise-files # path is realtive to the folder you are with terminal
# IMPORTNAT !=> than you need to commit this changes to get it work

# CASE: clone repo  ======================================>
git clone https://github.com/sdeli/to-do-app

#CASE: check tracked files by git ======================>
mysql-client-5.7                                install
mysql-client-core-5.7                           install
mysql-common                                    install
mysql-server-core-5.7

# push with prompted for credentials
 git config --local credential.helper
 git push origin ....
 git push https://sdeli@github.com/sdeli/hammerspoon.git


# show changes you made to the code
 git diff Concept-Tutorials/git-tutorial.sh
 
 # checkout remote branch
 git checkout -b feat/sw-update origin/feat/sw-update