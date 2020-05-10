import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://symfony-01.local/api';

let token = null;

const tokenPlugin = secured => {
    return (request) => {

        if (token && secured) {
            request.set('Authorization', `Bearer ${token}`);
        }
    };
};

const responseBody = response => response.body;

const fullUrl = (url) => `${API_ROOT}${url}`;

export const requests = {
    get: (url, secured = false) => {
        console.log('token: ', token);
        return superagent.get(fullUrl(url)).use(tokenPlugin(secured)).then(responseBody);
    },
    post: (url, body = null, secured = true) => {
        return superagent.post(fullUrl(url), body).use(tokenPlugin(secured)).then(responseBody);
    },
    setToken: (newJwtToken) => {
        token = newJwtToken
    }
};
