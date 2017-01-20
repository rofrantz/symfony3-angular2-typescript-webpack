switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./webpack/prod.conf.js');
        break;
    case 'test':
        module.exports = require('./webpack/test.conf.js');
        break;
    default:
        module.exports = require('./webpack/dev.conf.js');
}