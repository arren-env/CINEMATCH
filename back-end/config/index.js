const dotenv = require('dotenv');

//dotenv export
dotenv.config();
const files = {
    APP_PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET,
    REFRESH_SECRET,
    APP_URL
} = process.env;
module.exports = files;