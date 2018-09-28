#CASE uninstalling stuff =============================
# step 1 => check which packages should be uninstalled
sudo dpkg --get-selections #or
dpkg --list 

# purge the package
sudo apt purge mysql-server mysql-server-5.7
#or 
sudo apt-get --purge removez
# if program hasnt been removed succefully
sudo aptitude remove