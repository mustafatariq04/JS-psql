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


