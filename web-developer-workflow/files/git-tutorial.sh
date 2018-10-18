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

# CASE 8 Change origine ======================================>
	

# CASE Set Origin where to push/pull ================================>
git remote add origin https://github.com/sdeli/web-developer-workflow
git remote add origin https://github.com/sdeli/to-do-app
# CASE Push =============== ======================================>
git push -u origin master

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

# CASE:  ==================================>
#git checkout head ~ 1/-1