# Survey app backend

Survey app backend implementation written with [node.js](https://nodejs.org/en/).

Related to: [survey-frontend](https://github.com/RokasLeng/survey-app-frontend)

## Demo

Live demo: [survey-app.lengvenis.me](http://survey-app.lengvenis.me)

* Username: demo@demo.com
* Password: demo

## Scripts

Install MongoDB database from [documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/)


Start MongoDB instance:

```sh
mongod
```

Install dependencies using yarn or npm manager:

```sh
yarn install
```

Start development version:

```sh
yarn start
```

## Design notes

### Folder structure ###

Configuration structure is copied from [MERN starter](https://github.com/Hashnode/mern-starter): 

* `config` - database configuration and demo data
* `controllers` - auth and survey controllers
* `models` - mongoDB models 
* `routes` - api routes
* `services` - passport service
* `views` - error and index jade views

       
## Features log
| Feature | Status | References |
|:---|:---|:---|
| Passport.js support | DONE | [www.passportjs.org](http://www.passportjs.org/)|
| Async/await presets | DONE | [MDN Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| CORS support | DONE | [MDN Cross Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) |
| Error handling | DONE ||
| ES6 imports | DONE ||
