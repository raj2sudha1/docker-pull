#!/bin/bash

docker pull raj2sudha/iothub-poc
#docker stop iothub-poc
#docker run --rm --privileged --name iothub-poc -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker -v /usr/lib/arm-linux-gnueabihf/libltdl.so.7:/usr/lib/arm-linux-gnueabihf/libltdl.so.7 -v /usr/local/test1:/usr/local/test1 -it raj2sudha/iothub-poc:latest

node dockerstop.js

#docker stop iothub-poc



