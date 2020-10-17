const express = require('express');
const router = require('./router');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 443;

app.use(express.json());
app.use(cors({
    origin: ['https://theoprovost.herokuapp.com', 'http://localhost'],
    optionsSuccessStatus: 200 // for legacy browser support
}));

app.use(router);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
});

module.exports = app;