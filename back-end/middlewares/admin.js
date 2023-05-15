const CustomErrorHandler = require('../services/customErrorHandler');

const admin = (req, res, next) => {
    try {
        if (!req.user || req.user.Role !== 'admin') {
            return next(CustomErrorHandler.unAuthorized('Only admins can perform this operation'));
        } else
            next();
    } catch (error) {
        return next(error.message);
    }
};

module.exports = admin;