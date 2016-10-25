FROM ubuntu:16.04

RUN apt-get -y update
RUN apt-get -y upgrade

RUN apt-get install -y nodejs
RUN apt-get install -y nodejs-legacy
RUN apt-get install -y npm

RUN npm install forever

RUN npm install -g express

RUN mkdir -p /opt/aap/
WORKDIR /opt/aap/

COPY package.json /opt/aap/
COPY . /opt/aap/

RUN npm install

EXPOSE  3004

CMD [ "npm", "start" ]
