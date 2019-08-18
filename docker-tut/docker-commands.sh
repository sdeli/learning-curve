#!/usr/bin/env bash
# Terminology
# task: single container
# service: container(s) of the same app
# stack: A stack is a group of interrelated services that share dependencies, and can be orchestrated and scaled together.

docker --help

docker image ls
sudo docker rmi -f $(sudo docker images -a -q)

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

# create and start container at once
docker run -p 4000:80
sudo docker run -it -d --name foo1 ubuntu /bin/bash
sudo docker run --name nginx-template-base -p 8080:80 -e TERM=xterm -d nginx

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

docker swarm init
docker stack deploy -c docker-compose.yml getstartedlab

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

# Docker Networking
    default networks:
        Bridge - default network for all containers.
        Host - shares the network with the host machine.
        none - containers without an ip.
    Bridge network
        - all containers on this network get a unique ip
        - Has an own DNS server.
    User-Defined bridge networks
        - has an own DNS server, which translates container names to its ip - automatic service discovery
