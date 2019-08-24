require('dotenv').config();
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.PG_URI,
});

client.connect()
  .then(() => console.log('Successful connection'))
  .catch(console.error);
  
client.query('SELECT NOW() as blah')
  .then(console.log);
