const { Pool } = require('pg');

let clientPg;
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
    clientPg = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    console.log("PG : !production");
    clientPg = new Pool();
}

// Connection test:
// const test = clientPg.query('SELECT * FROM "projects";').then((test) => console.log({
//     result: test.rows
// }));

module.exports = clientPg;