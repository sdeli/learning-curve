#!/usr/bin/env bash
# Terminology
# task: single container
# service: container(s) of the same app
# stack: A stack is a group of interrelated services that share dependencies, and can be orchestrated and scaled together.

docker --help

docker image ls | docker images
sudo docker rmi -f $(sudo docker images -a -q)
docker tag bb38976d03cf yourhubusername/verse_gapminder:firsttry

sudo docker container ls --all

docker search ubuntu

# get container id-s of all containers
sudo docker ps -a
sudo docker container ls -a

# build an image from Dockerfile
# The dot means the path of the file
docker build --tag=friendlyhello .

# create container but doesnt start it
# /bin/bash stays there because without a running process the container exists
# -it stands for integrated terminal, which is needed that we can attach to it
sudo docker create -it --name=foo5 ubuntu /bin/bash

sudo docker start foo5
sudo docker stop foo5

docker system prune
docker container rm -f CONTAINER_ID
docker container ls -aq | xargs docker container rm
sudo docker inspect a4c61b8c1e47 | grep IPAddress # get IP Address

# create and start container at once
docker run -p 4000:80
sudo docker run -it -d --name foo1 ubuntu /bin/bash
sudo docker run --name nginx-template-base -p 8080:80 -e TERM=xterm -d nginx
sudo docker run -itd --name=mysql-5.7.27 --network=mysql-db mysql:5.7.27
sudo docker run \
--name=mysql \
-e MYSQL_ROOT_PASSWORD=majom2 -e MYSQL_USER=sdeli -e MYSQL_PASSWORD=dalias19 \
--network=mysql-db \
-v /home/sandor/startup-scripts/mysql:/src \
-d \
mysql

# run node.js container with debug config
sudo docker run \
--name=test.austriaiallas.com \
--network=mysql-db \
-p 4000:40000 -p 5858:5858 \
-v /home/sandor/austria-recruitment/:/austria-recruitment \
test.austriaiallas.com

# to exit terminal press ctrl-p + q
docker attach CONTAINER_NAME

# check what was printed to the console of the container
docker logs CONTAINER_NAME

# execute commands in running container
sudo docker exec -it -e VAR=1 foo1 bash
sudo docker exec -it CONTAINER_ID bash
sudo docker exec -d foo1 mkdir majom

# commit the changes ,made on docker container to an image
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

docker login
docker push yourhubusername/verse_gapminder

sudo docker exec -it sandor_db_1 sh -c 'exec mysql -uroot --password=majom2 -h localhost < /src/all_databases.sql'

# Docker Networking
#    default networks:
#        Bridge - default network for all containers.
#        Host - shares the network with the host machine.
#        none - containers without an ip.
#    Bridge network
#        - all containers on this network get a unique ip
#        - Has an own DNS server.
#    User-Defined bridge networks
#        - has an own DNS server, which translates container names to its ip - automatic service discovery

docker network create --driver bridge my-network
docker network rm my-network
docker network ls
docker network inspect bridge

# Docker Storages
#    Volume mounts:
#        Data stored in a certain docker managed folder and only docker processes have access to.
#        What a container writes here stays here, even after container is removed.
#        For data which is persistent over containers
#    Bind Mounts
#        Folders which are directly linked from the host machine to docker container.
#        Non Docker application can access and modify the directory - so they are less secure then volumes
#        Configiration file for the container
#    TmpFs Mounts - Temporary File System Mopunts
#        This data is written to the memory, never gets to persistent storage.
#        Exists just witrhin the lifecycle of a cotnainer
#        Good for secretr info

# Docker-Compose
docker-compose up -d  q
docker-compose up --scale appName=5
docker-compose down
sudo docker-compose -f ./empire-compose.yml down
sudo docker-compose -f ./empire-compose.yml up -d --scale ausztriaiallas=5
sudo docker-compose -f /home/sandor/austria-recruitment.yml up -d --scale ausztriaiallas=5

# Attach to container created by DOCKER-COMPOSE
sudo docker exec -it sandor_db_1 /bin/bash

# Docker Swarm
docker swarm init
docker stack deploy -c docker-compose.yml getstartedlab
