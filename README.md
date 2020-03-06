# Building RESTful Web APIs with Node.js, Express, MongoDB and JavaScript


## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *src/config/database.js*

## Clone this repository

```
git clone git@github.com:AditechGH/rest-api-node-mongodb-js.git .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev:build
then
npm run dev
```

Run in production mode 

```
npm run prod:build
then
npm run start
```
