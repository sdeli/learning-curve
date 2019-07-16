#!/usr/bin/env bash
# there are 2 types of logs
#    error logs
#    access logs => logs all requests

events {}

http {
    index index.html;

    server {
        root /home/sandor/projects/learning-curve/nginx-tut/static-files;
        # in try files last param causes a url rewrite
        try_files $uri $uri/ =404;
        access_log /home/sandor/projects/learning-curve/nginx-tut/static-files/access_log.txt;
        error_log /home/sandor/projects/learning-curve/nginx-tut/static-files/error_log.txt;

        location /majom {
            access_log off;
            return 200 "faszom";
        }
    }
  }