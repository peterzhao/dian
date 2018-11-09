FROM node:10
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install && \
    npm run build
EXPOSE 8080
CMD [ "node", "src/server/index.js" ]
