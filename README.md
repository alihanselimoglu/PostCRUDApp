# MEVN Stack

A Quickstart template for building a fullstack using:
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [VueJS](https://vuejs.org/)

The application consists of an Express REST API that is consumed by a VueJS Single Page Application.

## Installation

This repository can be used via cloning the code base or copying it as a GitHub template. The process is identical excluding the first step:s

```sh
# clone this repository
git clone git@https://github.com/alihanselimoglu/PostCRUDApp [directory-name]

# or click "use this template" and clone your new repo
git clone <your-repo>

# run the setup script
npm run setup

# if the setup script fails:
# install dependencies in both sub-projects
npm ci
npm ci --prefix client/

# copy env file
cp .env.example .env
```

### Other Dependencies

You will also need:
  - A MongoDB instance to connect to

## Development



Application can be run individually:

```sh
# Start the Express application with reloading via nodemon
npm start:server

# Start the Vue application with HMR and Reloading
npm run dev:client
```

## About App

This is a simple post sharing CRUD app without authentication


![image](https://github.com/alihanselimoglu/PostCRUDApp/assets/82150661/032e9887-8e3e-48fe-b726-529728040963)

![image](https://github.com/alihanselimoglu/PostCRUDApp/assets/82150661/af856ee6-80ef-4e44-a464-3d6ddb8fe04e)

