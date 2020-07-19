FROM node:latest

#Creating App Directory
RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

EXPOSE 3001 90

CMD [ "npm", "start" ]
