FROM node:9.11-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install -s --only=production
COPY . .
RUN npm run build

FROM nginx:1.13-alpine as serve
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
