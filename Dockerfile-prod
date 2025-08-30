FROM node:18-alpine as build
WORKDIR /app
COPY packages*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/confi.d/default.conf

CMD ["nginx", "-g", "daemon off;"]