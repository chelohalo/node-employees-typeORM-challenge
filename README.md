# Coding Challenge with Express, TypeORM, PostrgreSQL DB and seeding.

## Backend Setup

1. Run `npm install` to install all dependencies.

## Set environment variables

2. Create a `.env` file in project root folder with the following values:

`POSTGRES_DB_USERNAME=postgres`\
`POSTGRES_DB_PASSWORD=mysecretpassword`\
`POSTGRES_DB_DATABASE=postgres`\
`POSTGRES_DB_PORT=5432`\
`EXPRESS_PORT=3000`

## Install Postgres DB. 

3. Create a postgres database with docker using the following command on terminal

- Install Docker in your local environment and then run the following command:

`docker run --name postgres-challenge -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

- This command will download and run a postgres docker image with `mysecretpassword` password. It is strongly recomended to change the password on production environments. 

4. Run the project in development mode with: `npm run dev`

- When you run the project for the first time, this will create 3 tables (Employee, employee_type, shop ) on postgres DB if these were not previously created.

## Seeding Database. 
5. This step is to populate SQL DB with dummy data. To do this, open a new terminal and run `npm run seed <number of seeds>`.\
For example, `npm run seed 5` will populate 5 records.
- Each seed will populate 1 employee, 1 employeeType and 2 shops.
- Records are populated with the `faker` dependency.

# API Documentation

[API Doc](https://documenter.postman.com/preview/13248725-90eabd9c-593c-4ca3-8aeb-21b7939ac30f?environment=&versionTag=latest&apiName=CURRENT&version=latest&documentationLayout=classic-double-column&right-sidebar=303030&top-bar=FFFFFF&highlight=EF5B25)

# Explanation and Assumptions

![ER Image](/assets/images/ER_Diagram.png)

- Employee is related to shop in a 1-to-Many relationship. (One employee can work for more than one shop but every shop can hold one employee - this is a challenge requirement).
- Employee is related to employee_type with the FK typeId.
- Employee Type names are "Manager", "Accountant" and "Clerk".

# Dependencies used:

## Dependencies:  

`body-parser:` Node.js body parsing middleware.  
`cors:` CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.  
`express:` Fast, unopinionated, minimalist web framework for node.  
`pg:` Non-blocking PostgreSQL client for Node.js.  
`reflect-metadata:`Polyfill for Metadata Reflection API. This is required for TypeORM.
`typeorm:` TypeScript ORM to interact with DBs.
## Dev dependencies:

`@faker-js/faker:` faker is to generate dummy data. Contains different methods to generate random names, addreses, etc.  
`@types/cors:` types for cors.  
`@types/express:` types for express.  
`@types/node:` types for node.  
`@typescript-eslint/eslint-plugin:` ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.  
`@typescript-eslint/parser:` parser for ESlint.  
`eslint:`  
`nodemon:` Restarts server with new changes.
ts-node: ts-node is a TypeScript execution engine and REPL for Node.js.
`typescript:` TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.