#
# Title: Digital Ocean tut
#
#
#
#https://www.namecheap.com/support/knowledgebase/subcategory.aspx/2237/host-records-setup
#Na szoval nem tudom h csinaltam meg
# de kellett generaltatni ssh keyt
# es az ssh keyt az /home/sandor/.ssh/authorized_keys nevu fajlbol kell venii
# No idea hogy crealodott
# vaalszeg ezzel

#utanna pedig vhogy vmi kod megicsnalta az authorized keys filet
# ha nem megy akkor csinalj uj ssh keyt es amikor uj ropletet csinalsz  a publicot masold be ott ahol a new ssh key btnra ra tucc clickelni
# CASE: ======================================>

# STEPPS TO CREATE SERVER:
# CASE: generate ssh key ======================================>
ssh-keygen
ssh-add .ssh/id_rsa
# Create Dropplet => Forget ssh key => receive pass =>
#then type gen pass 2 times then new pass  

# CASE: Login via terminal ======================================>
ssh root@ip
ssh root@207.154.204.236

# CASE: add publick key to root =================================>
nano /root/.ssh/authorized_keys
# then copy content from ~/.ssh/id_rsa.pub

# CASE: Create new user ======================================>
adduser username

# CASE: Check if user exist ======================================>
id sdeli

# CASE: Add sudo privilages to new User =============================>
usermod -aGsudo sdeli

# CASE: switch to new user ======================================>
su - sdeli

# CASE: create authorized keys file ===============================>
# create ~/.ssh/ with 777
nano ~/.ssh/authorized_keys

#then copy content of /home/sandor/.ssh/id_rsa.pub
#then ctr+x => y => enter
#then ~/.ssh => 700 , ~/.ssh/authorized_keys => 644 (sztem senkinek sem lehet rajta executja), after this you can log on 

# CASE: Config ssh ======================================>
sudo nano ssh /etc/ssh/sshd_config
#then disable root lign => ctrl + w => PermitRootLogin no => PasswordAuthentication no

# CASE: Reload configs ======================================> 
sudo systemctl reload ssh

# CASE: Security Stuff ======================================>
sudo ufw allow OpenSSH
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
sudo ufw allow 5000 #=> allow port which your app will use

# CASE: Install node ======================================>
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
command -v nvm
nvm install v8.11.3

# CASE: clone github repo ======================================>
git clone https://github.com/sdeli/to-do-app
git clone https://github.com/heroku/node-js-sample

# CASE: Set up Process manages ===================================>
npm install -g pm2
#then start app.js
pm2 start app.js
#then setup system variables
pm2 startup systemd #paste the snippet the command provides
#then Set up nameservers on the page you bought the domain

# CASE: Set Up nginx ======================================>
# https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04
# then
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
# https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/

# CASE: ssl cert ======================================>
#https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
sudo certbot --nginx -d sandordeli.online -d www.sandordeli.online