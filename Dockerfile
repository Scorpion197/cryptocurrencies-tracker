FROM node:17

WORKDIR /home/app/crypto

COPY package.json package-lock.json ./

COPY . . 

RUN npm install 

EXPOSE 3000
