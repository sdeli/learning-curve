#!/usr/bin/env bash
user www-data;

worker_processes auto;

events {
  worker_connections 1024;
}

http {
  server {

    listen 80;
    server_name 167.99.93.26;

    root /home/sandor/projects/learning-curve/nginx-tut/static-files;

    location / {
      try_files $uri $uri/ =404;
    }
  }
}