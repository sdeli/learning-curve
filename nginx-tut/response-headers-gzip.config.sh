#!/usr/bin/env bash
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    include ./mime.types;
        
    # to send gzipped stuff we need to have => add_header Vary Accept-Encoding;
    gzip on;
    gzip_comp_level 3;
    gzip_types text/css;
    gzip_types text/javascript;

    server {
        listen 80;
        server_name www.majom.hu majom.hu;

        root /sites/demo;

        # ~* for case unmatched regular expression match
        location ~* /images/.*\.(jpg|png|gif|jpeg) {
            access_log off;
            # tells the receiving client, this response can be cached in any way
            add_header Cache-Control public;
            add_header Pragma public;
            # tells the receiving client, content of this response can vary based on accept encoding => compressed or uncompressed
            add_header Vary Accept-Encoding;
            # tells the receiving client, content of this response expires when the value defines
            expires 1M;

            root /home/sandor/projects/learning-curve/nginx-tut/static-files;
            try_files $uri =404;
        }

         location ~* /images/.* {
            access_log off;
            return 404 "maybe not a correct file";
        }


        location /articles {
            root /home/sandor/projects/learning-curve/nginx-tut/static-files;
            try_files $uri $uri/ =404;
        }
    }
}