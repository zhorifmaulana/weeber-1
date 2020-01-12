FROM node:lts
COPY frontend/ /code
WORKDIR /code
RUN npm install
CMD ["npm", "start"]