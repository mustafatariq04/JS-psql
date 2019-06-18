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

const person = process.argv[2];

knex.select('*').from('famous_people')
  .where('first_name', '=', person)
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    rows.forEach((element, index) => {
      const bdate = new Date(element.birthdate).toISOString().split('T')[0]; // function to change date format
      console.log(`${index + 1}. ${element.first_name} ${element.last_name}, born '${bdate}'`)
    })
  })
