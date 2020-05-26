const Promise = require('promise');
const connection = process.env.MONGO_URI;

module.exports = {
    db: connection
}