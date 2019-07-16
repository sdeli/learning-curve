#!/usr/bin/env bash
# It works when DNS records are pointed at the server
events {}

http {
    index index.html;

    server {
        listen 80;
        server_name 124.0.0.2;

        root /home/sandor/projects/learning-curve/nginx-tut/static-files;
        # in try files last param causes a url rewrite
        try_files $uri $uri/ =404;
  }

    server {
        server_name www.domain2.com;

        root /var/www/domain2.com/htdocs;
    }
}