# Eco'trip Front
Serveur express JS qui serve des fichiers html et des assets nécessaire pour le front

## Fonctionnalité principales
- Serveur Express Js

## Configuration requise
- git
- node.js v21 ou Docker

## Instruction d'installation

### Via git et npm

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/nodejs_api-project-front`
- dans le repertoire, pour installer les dependances : `npm install`
- pour le lancer le serveur : `npm start`

### Via git et Docker

- cloner le dépot : `git clone https://github.com/Vivien-Parsis/nodejs_api-project-front` 
- dans le répertoire : `docker build -t ecotrip-front . && docker run -p 4000:4000 --env ISDOCKER=true --name  ecotrip-front ecotrip-front`

## Adresse

`http://localhost:4000`