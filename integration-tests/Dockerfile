FROM node:10
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install

CMD [ "npm", "run", "test" ]
