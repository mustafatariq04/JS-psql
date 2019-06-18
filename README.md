# JS-psql
Connect to a PostgreSQL database from JavaScript directly using the native `pg` driver

## Node-Postgres
* Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
* Node-postgres (pg) is a collection of node.js modules for interfacing with your PostgreSQL database.

* Install
`$ npm install pg`


### Getting Started with Node-Postgres
This is the simplest possible way to connect, query, and disconnect with callbacks
```JS
const { Client } = require('pg')
const client = new Client()

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})
```

## Why Knex
### 1. Query builder - i.e., use JS to write SQL queries
  * Compose functions instead of concating strings
  * Includes a query builder that enables us to construct database queries in object-oriented techniques such as method chaining.
  * Easier to programatically generate queries
  * Easier to avoid SQL injections  - all knex functions escape their input parameters

### 2. Interact with multiple types of SQL databases without changing code
  * Each db implements its own version of SQL, a lot of overlap, but you may still have to have different codepaths in development vs. production

### 3. Helpers to manage "migrations"
  * Migrations are a way to:
    * make changes to the db schema
    * manage changes to the db schema over time (in sync with our changes to our app's code - making it possible to sync changes between devs working on an app)

DB Schema = the 'shape' of the database, which tables and columns exist (but not, what data is in the db) 
  * describing our db schema in code (and tracking it with git along with the rest of our code)

### 4. Helpers to manage 'seeding'
  * Seeding is 'running a script to populate your db with some data', usually just used for development & testing
  * Knex provides a way to describe seed data and command line funcitons to insert the data
  * Like with migrations, you want to keep seed scripts up to date with changes to your app



