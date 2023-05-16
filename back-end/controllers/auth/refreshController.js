const joi = require('joi');
const CustomErrorHandler = require('../../services/customErrorHandler');
const JwtService = require('../../services/JwtService');
const { REFRESH_SECRET } = require('../../config/');
const User = require('../../models/user');
const Refresh_Token = require('../../models/refreshToken')

const refreshController = {

    async refresh(req, res, next) {
        //validation
        const refreshSchema = joi.object({
            refresh_token: joi.string().required(),
        });

        const { error } = refreshSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        //database
        let RefreshToken;
        try {
            RefreshToken = await Refresh_Token.findOne({ Token: req.body.refresh_token });
            // console.log(RefreshToken);
            if (!RefreshToken) {
                return next(CustomErrorHandler.unAuthorized('Invalid refresh token.'));
            }
            let userId;
            try {
                const { _id } = await JwtService.verify(RefreshToken.Token, REFRESH_SECRET);
                userId = _id;
                // console.log(userId);
            } catch (err) {
                return next(CustomErrorHandler.unAuthorized('Invalid refresh token.'));
            }

            const user = await User.findOne({ _id: userId });
            if (!user) {
                return next(CustomErrorHandler.unAuthorized('no user found'));
            }

            //token
            const access_token = JwtService.sign({ _id: user._id, Role: user.Role });
            const refresh_token = JwtService.sign({ _id: user._id, Role: user.Role }, '1y', REFRESH_SECRET);

            //database whitelist
            await Refresh_Token.create({ Token: refresh_token });
            res.send({ access_token, refresh_token });


        } catch (err) {
            return next(err);
        }
    }
}

module.exports = refreshController;