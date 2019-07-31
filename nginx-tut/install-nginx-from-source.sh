#!/usr/bin/env bash
nginxVersion="1.5.5"
cd /home/sandor
wget http://nginx.org/download/nginx-$nginxVersion.tar.gz
tar -xzf nginx-$nginxVersion.tar.gz
rm nginx-$nginxVersion.tar.gz

cd nginx-$nginxVersion
ln -sf nginx-$nginxVersion nginx

#sudo apt-get update
#sudo apt-get install build-essential
#sudo apt-get install libpcre3 libpcre3-dev libpcrecpp0 zlib1g zlib1g-dev libssl-dev

#./configure --help => for configuration flags => https://www.nginx.com/resources/wiki/start/topics/tutorials/installoptions/
./configure
# nginx path prefix: "/usr/local/nginx"
# nginx binary file: "/usr/local/nginx/sbin/nginx"
# nginx configuration prefix: "/usr/local/nginx/conf"
# nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
# nginx pid file: "/usr/local/nginx/logs/nginx.pid"
# nginx error log file: "/usr/local/nginx/logs/error.log"
# nginx http access log file: "/usr/local/nginx/logs/access.log"
# nginx http client request body temporary files: "client_body_temp"
# nginx http proxy temporary files: "proxy_temp"
# nginx http fastcgi temporary files: "fastcgi_temp"
# nginx http uwsgi temporary files: "uwsgi_temp"
# nginx http scgi temporary files: "scgi_temp"

./configure --with-http_ssl_module --conf-path=/home/sandor/projects/learning-curve/nginx-tut/named-server-blocks.config.sh
make
make install
