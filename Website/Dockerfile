# BUILD step
FROM node:16.13 as build

# Import environment variables from build args
# No env variables
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Dependencies
COPY package.json /app/package.json
RUN npm install -g npm@latest
RUN npm install -g @angular/cli@13.2.3
RUN npm install

COPY . /app

# Build
RUN ng build --output-path=/app/dist --configuration=production

# DISTRIBUTE step
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./ng.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
