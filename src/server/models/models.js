const { Pool } = require('pg');
require('dotenv').config()

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// read portion of CRUD 
const zipGetReq = `SELECT p.title,p.price,p.zip,p.description,s.name,s.about
FROM product p
INNER JOIN seller s
ON p.seller_id = s.seller_id
WHERE p.zip = $1`
// create portion of CRUD 
const saveProduct = ` INSERT INTO product(title,zip,description,seller_id)
VALUES ($1,$2,$3,$4)`

const saveSeller = ` INSERT INTO select(name,zip)
VALUES ($1,$2)`

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };