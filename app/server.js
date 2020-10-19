const express = require('express');
const router = require('./router');
const bodyParser = require("body-parser");

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: ['https://theoprovost.herokuapp.com', 'http://localhost'],
    optionsSuccessStatus: 200 // for legacy browser support
}));

// Local static assets access
app.use(express.static(__dirname + '/assets'));

// Specify views directory and add ejs as the view engine for dynamic content 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(router);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

// NB : DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process
process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
});

module.exports = app;