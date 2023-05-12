const dotenv = require('dotenv');

dotenv.config();
const files = {
    APP_PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET
} = process.env;
module.exports = files;