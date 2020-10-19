const { Pool } = require('pg');

let clientPg;
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") { 
    clientPg = new Pool({
        connectionString: process.env.DATABASE_URL
    });
} else { 
    clientPg = new Pool();
}

module.exports = clientPg;