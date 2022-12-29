FROM node:14


WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]

# Path: Backend\Dockerfile
# Compare this snippet from frontend\Dockerfile:
# FROM node:14
#
# WORKDIR /app
#
# COPY package.json ./
#

