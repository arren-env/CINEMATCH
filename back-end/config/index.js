const dotenv = require('dotenv');

dotenv.config();
const files = {
    APP_PORT,
    DEBUG_MODE
} = process.env;
module.exports = files;