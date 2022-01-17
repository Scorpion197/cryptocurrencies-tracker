FROM NODE:17

WORKDIR /app/frontend 

COPY package.json package-lock.json ./ 

COPY . ./ 

RUN npm install 

EXPOSE 3000
