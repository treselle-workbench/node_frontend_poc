
### Setup Ubuntu 16.04 image ####
FROM ubuntu:16.04
MAINTAINER TRESELLE

RUN apt-get -y update
RUN apt-get -y upgrade

###  Installation of node with related packages ###

RUN apt-get install -y nodejs
RUN apt-get install -y nodejs-legacy
RUN apt-get install -y npm

### Install forever packages ####

RUN npm install forever

### Install express framework ####

RUN npm install -g express

### Create a project directory ####
RUN mkdir -p /opt/aap/
WORKDIR /opt/aap/

### Copy the python service files ####
COPY package.json /opt/aap/
COPY . /opt/aap/

### Install Node Package Manager ####

RUN npm install

### EXPOSE view model layer PORT 3000 ####

EXPOSE  3000

### Execute the nodejs application ####
CMD [ "npm", "start" ]