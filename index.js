const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('env2')('./.env');
const cors = require('./middleware/cors/cors');

// client build
app.use(express.static('./client/dist'));

// middleware
app.use(bodyParser.json());
app.use(cors);

// response types
express.response.jsonSuccess = function (data) {
    this.json({data})
};
express.response.errorResponse = function (status, e) {
    this.status(status).send({message: e});
};

// routes
const picasaApi = require('./routes/picasa-api.route');
app.use('/api/v1', picasaApi);

// app listen
app.listen(process.env.port || 3000, () => {
    console.log('App is up...');
});