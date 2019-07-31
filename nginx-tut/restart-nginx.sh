#!/usr/bin/env bash
sudo nginx -s stop
sudo nginx -t -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh
sudo nginx -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh
#sudo service nginx start
