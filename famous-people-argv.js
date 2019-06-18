const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
	password : settings.password,
	database : settings.database,
	host     : settings.hostname,
	port     : settings.port,
	ssl      : settings.ssl
});

const famousPersonFirstName = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
	} else {
    client.query(`SELECT * 
                  FROM famous_people 
                  WHERE UPPER(first_name) = UPPER($1) OR UPPER(last_name) = UPPER($1)`, [famousPersonFirstName], (err, res) => {
      if (err) {
        return console.error("error running query", err);
      }
      const famousPersonProfile = res.rows;
      famousPersonProfile.forEach((element, index) => {
        const bdate = new Date(element.birthdate).toISOString().split('T')[0]; // function to change date format
        console.log(`${index + 1}. ${element.first_name} ${element.last_name}, born '${bdate}'`)
      })
      client.end();
    });
  }
});