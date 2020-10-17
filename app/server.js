const express = require('express');
const router = require('./router');

const https = require('https');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 443;


const server = https.createServer({
    key: fs.readFileSync(__dirname + '/ssl/server.key'),
    cert: fs.readFileSync(__dirname + '/ssl/server.cert')
}, app);

app.use(express.json());
app.use(cors({
    origin: ['https://theoprovost.herokuapp.com'],
    optionsSuccessStatus: 200 // for legacy brower support
}));

app.use(router);

server.listen(port, () => console.log(`Server is listening on https://localhost:${port}`));

module.exports = server;