
FROM node:lts-alpine


WORKDIR /app


COPY package*.json ./


RUN npm i


COPY . .


RUN npm run build
RUN npm run build-backend


EXPOSE 3005


CMD ["npm", "run", "start-backend"]
