const joi = require('joi');
const User = require('../../models/user');
const CustomErrorHandler = require('../../services/customErrorHandler');
const JwtService = require('../../services/JwtService');
const bcrypt = require('bcrypt');
const RefreshToken = require('../../models/refreshToken');

const loginController = {

    //login req
    async login(req, res, next) {
        //validation
        const loginSchema = joi.object({
            Email: joi.string().email().required(),
            Password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        });

        const { error } = loginSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        try {
            const user = await User.findOne({ Email: req.body.Email });

            if (!user) {
                return next(CustomErrorHandler.wrongCredentials());
            }
            
            //compare password
            const match = await bcrypt.compare(req.body.Password, user.Password);
            if (!match) {
                return next(CustomErrorHandler.wrongCredentials());
            }

            //token
            const access_token = JwtService.sign({ _id: user._id, Role: user.Role });
            const refresh_token = JwtService.sign({ _id: user._id, Role: user.Role }, '1y', REFRESH_SECRET);

            //database whitelist
            await RefreshToken.create({ Token: refresh_token });
            res.send({ access_token, refresh_token });

        } catch (err) {
            return next(err);
        }
    },

    //logout req
    async logout(req, res, next) {
        //validation
        const refreshSchema = joi.object({
            refresh_token: joi.string().required(),
        });

        const { error } = refreshSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        try {
            await RefreshToken.deleteOne({ Token: req.body.refresh_token })
        } catch (err) {
            return next(new Error('something went wrong in the database.'))
        }
        res.json({ status: 1 })
    }
}

module.exports = loginController;