# TBooq Application

## Getting started

### To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server
- the API is available at http://localhost:8000/api
- run the `npm install & ng serve` command under the UI to start it at http://localhost:4200/

#### MongoDB persistent store
Basically to use MongoDB, set the `DB_URI` environment variable.
```
DB_URI=mongodb://localhost:27017/tbooq
```

### Application Structure
 
- `api/` - This folder contains the api services.
- `public/` - This folder contains the front-end files.
- `i18n/` - This folder contains the json files for language messages.
- `models/` - This folder contains all the schemas
- `routes/` - This folder contains the routes
- `components/` - This folder contains the components file for api controllers


## Contact
Copyright (c) 2019 TBooq
