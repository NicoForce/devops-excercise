FROM node:16
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]
