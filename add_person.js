const settings = require("./settings"); // settings.json
const pg = require("pg");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

const fName = process.argv[2]
const lName = process.argv[3]
const bDate = process.argv[4]

knex('famous_people')
.insert({ first_name: fName , last_name: lName , birthdate: bDate })
.returning('*')
.then(rows => console.log(rows))

