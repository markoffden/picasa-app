const express = require('express');
const router = express.Router();

const picasa = require('../services/picasa-api.service');

router.post('/retrieve-access-token', (req, res, next) => {

    let authCode = req.body.data;

    let getTokenUrl = 'https://www.googleapis.com/oauth2/v4/token' +
        '?redirect_uri=' + process.env.CLIENT_URL +
        '&client_id=' + process.env.CLIENT_ID +
        '&client_secret=' + process.env.CLIENT_SECRET +
        '&grant_type=authorization_code' +
        '&code=' + authCode;

    picasa._post(getTokenUrl).then(
        data => {
            res.jsonSuccess(data);
        },
        error => {
            res.errorResponse(error.status, error.message);
        }
    );
});

module.exports = router;