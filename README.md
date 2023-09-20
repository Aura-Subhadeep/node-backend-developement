# Backend Learning Repo

This repo contains code examples and files I used while learning backend development. 

## Node.js

The `app.js` file contains a basic Express app with the following:

- Routes for `/api/v1/tours` and `/api/v1/users` 
- Connecting to a MongoDB database 
- Controllers for handling user requests

## MongoDB

The `models/tourModel.js` file contains a MongoDB Schema definition for a "Tour" model with the following fields:

- `name` 
- `rating`
- `price`

## Environment Variables

The `config.env` file contains environment variables for:

- Database URL
- Database password

This is loaded using the `dotenv` package.

## API Documentation

The API has the following routes:

### `/api/v1/tours`

- `GET` - Get all tours 
- `POST` - Create a new tour

