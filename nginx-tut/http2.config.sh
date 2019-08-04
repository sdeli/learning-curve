#!/usr/bin/env bash

# this one expects to have an ssl cert created and a private key created to /etc/nginx/ssl/
#   mkdir /home/sandor/nginx-1.15.8/ssl
#   sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /home/sandor/nginx-1.15.8/ssl/self.key -out /home/sandor/nginx-1.15.8/ssl/self.crt
# And expects to have created a diffhelman paramter
# openssl dhparam 2048 -out /home/sandor/nginx-1.15.8/ssl/dhparam.key

# MAIN TASKS OF ENABLING HTTP2
#   disable ssl use tls only
#   optimize sipher suits
#   enable dh params
#   enable hsts
#   cache ssl sessions
#   redirect requests comming to http to http2
#   enable ssl cert and ssl cert key
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {

    include mime.types;

    # Redirect all traffic to HTTPS
    server {
        listen 80;
        server_name 167.99.93.26;
        return 301 https://$host$request_uri;
    }

    server {

#    activating ssl and http2 and listening on the standard 443 ports
    listen 443 ssl http2;
    server_name 167.99.93.26;

    root /sites/demo;

    index index.html;

#   telling where to find the ssl certificate
    ssl_certificate /etc/nginx/ssl/self.crt;
#   telling where to find the signing key
    ssl_certificate_key /etc/nginx/ssl/self.key;

    # Disable SSL abd activate the newer tls protocol
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    # Optimise cipher suits
    ssl_prefer_server_ciphers on;
#   to deny a cipher suit do !cipherSuiteName
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # Enable DH Params => allows the server to perform key exchanging in secrecy
#   This need to be created => openssl dhparam 2048 -out /home/sandor/nginx-1.15.8/ssl/dhparam.key
    ssl_dhparam /home/sandor/nginx-1.15.8/ssl/dhparam.key;

    # Enable HSTS => header which tells the browser not to load anything over http
    # => minimizes ti redirects from http port 80 to https port 443
    add_header Strict-Transport-Security "max-age=31536000" always;

    # SSL sessions => caches handshakes for certain amount of time
    ssl_session_cache shared:SSL:40m; # cache is reserved in memory shared among all processe
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~\.php$ {
        # Pass php requests to the php-fpm service (fastcgi)
        include fastcgi.conf;
        fastcgi_pass unix:/run/php/php7.1-fpm.sock;
    }
}