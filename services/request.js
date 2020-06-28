import http from 'axios';
import config from '../config'

const reqMethods = [
    'request', 'delete', 'get', 'head', 'options',
    'post', 'put', 'patch'
];
let axios = {};

reqMethods.forEach( (method) => {
    axios[method] = async function () {
        arguments[0] = !arguments[0].path ? (config.hostApiUrl + (arguments[0].indexOf('_conversations') == -1 ? '/api/client' : '') + arguments[0] ) : arguments[0].path;
        const unAuthenticateStatus = 401;
        try {
            const promise = await http[method].apply(null, arguments);
            if (promise.data.success) return promise.data;
            throw promise.data
        } catch (e) {
            if (e.message.indexOf(unAuthenticateStatus) >= 0 && process.client) return _handleRequestUnauthentication();
            throw e
        }
    }
});

const _handleRequestUnauthentication = () => {
    const path = window.location.pathname;
    window.location.href = `../src`;
};

export default axios