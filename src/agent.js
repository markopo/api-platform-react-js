import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://symfony-01.local/api';

let token = null;

const tokenPlugin = (request) => {

    if (token !== null) {
        request.set('Authorization', `Bearer ${token}`);
    }
}

const responseBody = response => response.body;

const fullUrl = (url) => `${API_ROOT}${url}`;

export const requests = {
    get: (url) => superagent.get(fullUrl(url)).use(tokenPlugin).then(responseBody),
    post: (url, body = null) => superagent.post(fullUrl(url), body).use(tokenPlugin).then(responseBody),
    setToken: (newJwtToken) => token = newJwtToken
};
