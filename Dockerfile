FROM node:lts
COPY frontend/ /code
WORKDIR /code
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "5001"]