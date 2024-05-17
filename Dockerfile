FROM node:18-alpine

RUN mkdir /app

WORKDIR /app
COPY . /app

RUN npm install
EXPOSE 5000

CMD ["npm", "run", "start"]
