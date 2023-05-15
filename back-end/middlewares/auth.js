const JwtService = require("../services/JwtService");
const CustomErrorHandler = require("../services/customErrorHandler");

const auth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    // console.log(req.headers);
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized());
    }
    const token = authHeader.substring(7);
    // const token = req.headers.authorization.split(' ')[1];
    // console.log(token);

    try {
        const { _id, Role } = JwtService.verify(token);
        const user = {
            _id,
            Role
        }
        req.user = user;
        next();

    } catch (err) {
        return next(CustomErrorHandler.unAuthorized());
    }
}

module.exports = auth;
