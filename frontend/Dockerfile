FROM node:18-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
#COPY package*.json ./
COPY .. .
RUN npm install
RUN npm run build

# Stage 2: Serve the angular app with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY ./ssl /etc/nginx/ssl
