FROM node:21-alpine
RUN mkdir /ecotrip_front
COPY . ./ecotrip_front
WORKDIR /ecotrip_front
RUN npm i
EXPOSE 4000
CMD ["npm","run","start"]