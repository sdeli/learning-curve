#!/usr/bin/env bash
sudo pkill -f nginx

ps -aux | grep nginx

nginx -h

sudo nginx -s stop
sudo nginx -t -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh
sudo nginx -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh

# get count of cpu cores for nginx worker processes
nproc
lscpu

# get how many files can be opened at once per cpu core =>  worker_connections
ulimit -n

# restart nginx with new config
sudo nginx -s stop
sudo nginx -t -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh
sudo nginx -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh

# create cert with open ssl => https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04
mkdir /home/sandor/nginx-1.15.8/ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /home/sandor/nginx-1.15.8/ssl/self.key -out /home/sandor/nginx-1.15.8/ssl/self.crt

# create diffhellmans parameter
openssl dhparam 2048 -out /home/sandor/nginx-1.15.8/ssl/dhparam.key