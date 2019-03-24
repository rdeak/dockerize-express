FROM node:8.11-alpine
WORKDIR /home/node/build
COPY ./package*.json ./
RUN npm install
WORKDIR /home/node/app
COPY . .
ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["sh", "-c", "[[ -d ./node_modules ]] || mv /home/node/build/node_modules . && npm start"]