FROM node:12.18.3

WORKDIR /var/www/frontend

ENV PATH /var/www/frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]