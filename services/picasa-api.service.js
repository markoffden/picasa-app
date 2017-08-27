const request = require('request');

module.exports = class PicasaService {

    static picasaCall(args) {

        return new Promise((resolve, reject) => {

            let params = {
                url: args.url,
                method: args.method,
                headers: {
                    'GData-Version': '3'
                }
            };

            if (args.auth) {
                params.headers['Authorization'] = args.auth;
            }

            request(params, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let data = JSON.parse(body);
                    resolve(data);
                } else {
                    reject({
                        status: response.statusCode,
                        message: error
                    });
                }
            });

        });
    }

    static _get(url, auth) {

        return this.picasaCall({
            url,
            auth,
            method: 'GET'
        });
    }

    static _post(url, auth, data) {

        return this.picasaCall({
            url,
            auth,
            method: 'POST',
            data
        });
    }
};