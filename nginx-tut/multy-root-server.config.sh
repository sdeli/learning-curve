#!/usr/bin/env bash
events {}

http {

  server {

        listen 80;
        server_name 167.99.93.26;
        # ~ is fir case sensitive regular expression match, ~/ is for case insensitive
        location ~ /images/.*(png|gif|ico|jpg|jpeg)$ {
#            return 200 "asdasdasd";
            root /home/sandor/projects/learning-curve/nginx-tut/static-files;
            # in try files last param causes a url rewrite
            try_files $uri $uri/ =404;
        }

        location /articles {
#            return 200 "asdasdasd";
            root /home/sandor/projects/learning-curve/nginx-tut/static-files;
            try_files $uri $uri/ /404;
        }
    }
}