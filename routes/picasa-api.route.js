const express = require('express');
const router = express.Router();
const env = require('env2')('./.env');

const picasa = require('../services/picasa-api.service');

router.post('/retrieve-access-token', (req, res) => {

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

router.get('/albums', (req, res) => {

    let auth = req.headers.authorization;

    picasa._get(`${process.env.API_URL}/feed/api/user/default?alt=json`, auth).then(

        data => {
            res.jsonSuccess(data);
        },
        error => {
            res.errorResponse(error.status, error.message);
        }
    );
});

router.get('/albums/:albumId/:resNum/:currIndex', (req, res) => {

    let auth = req.headers.authorization;
    let {albumId, resNum, currIndex} = req.params;

    picasa._get(`${process.env.API_URL}/feed/api/user/default/albumid/${albumId}?alt=json&max-results=${resNum}&start-index=${currIndex}`, auth).then(

        data => {
            res.jsonSuccess(data);
        },
        error => {
            res.errorResponse(error.status, error.message);
        }
    );
});

module.exports = router;