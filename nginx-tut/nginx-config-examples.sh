#!/usr/bin/env bash

# SIMPLE STATIC FILE SERVER
# To start => nginx -s reload
http {
    server / {
        # If there are severa; matching matching location blocks for the curr request nginx will choose the longets one
        location / {
            /home/sandor/projects/learning-curve/nginx-tut/static-files
        }

        # / matches /images/ as well but /images/ is longer so nginx will choose this
        location /images/ {
            root /data;
        }
    }
}