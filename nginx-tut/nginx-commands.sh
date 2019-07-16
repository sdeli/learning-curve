#!/usr/bin/env bash
sudo pkill -f nginx

# get count of cpu cores for nginx worker processes
nproc
lscpu

# get how many files can be opened at once per cpu core =>  worker_connections
ulimit -n