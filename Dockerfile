FROM node:10.15-alpine as builder

WORKDIR /app

RUN apk add --no-cache openssl git python

COPY package*.json ./
RUN npm install -s
COPY . .
RUN npm run build

FROM nginx:1.13-alpine as serve
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
