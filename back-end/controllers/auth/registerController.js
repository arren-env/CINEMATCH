const joi = require('joi');
const CustomErrorHandler = require('../../services/customErrorHandler');
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const JwtService = require('../../services/JwtService');

const registerController = {
    async register(req, res, next) {

        //validation
        const registerSchema = joi.object({
            FirstName: joi.string().min(3).max(30).required(),
            LastName: joi.string().min(3).max(30).required(),
            Email: joi.string().email().required(),
            Password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            PasswordConformation: joi.ref('Password')
        })

        const { error } = registerSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        //check if user already exist
        try {
            const exist = await User.exists({ email: req.body.Email })
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This email is already exist '));
            }
        } catch (err) {
            return next(err)
        }

        const { FirstName, LastName, Email, Password } = req.body;
        //hash password
        const hashedPassword = await bcrypt.hash(Password, 10);

        //database model
        const user = new User({
            FirstName,
            LastName,
            Email,
            Password: hashedPassword,
        });

        let access_token;
        try {
            const result = await user.save();

            //token
            access_token = JwtService.sign({ _id: result._id, Role: result.role })
        } catch (err) {
            return next(err)
        }

        res.json({ access_token: access_token });
    }
}

module.exports = registerController;