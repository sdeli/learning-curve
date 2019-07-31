#!/usr/bin/env bash
user www-data;

# worker_processes defines how many worker processes should be operated by nginx. With the auto option it opens
# the same amount as many processor cores the system has.
worker_processes auto;

events {
    # worker_connections directive defines howhow many open connections will be allowed per process
    worker_connections 1024;
}

http {
  include myme.types

  server {

    listen 80;
    server_name 167.99.93.26;

    root /home/sandor/projects/learning-curve/nginx-tut/static-files;

    location / {
      try_files $uri $uri/ =404;
    }
  }
}