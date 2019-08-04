#!/usr/bin/env bash
sudo pkill -f nginx

nginx -h

sudo nginx -s stop
sudo nginx -t -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh
sudo nginx -c /home/sandor/projects/learning-curve/nginx-tut/response-headers.config.sh

# get count of cpu cores for nginx worker processes
nproc
lscpu

# get how many files can be opened at once per cpu core =>  worker_connections
ulimit -n