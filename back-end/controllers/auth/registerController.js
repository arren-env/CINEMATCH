const joi = require('joi')

const registerController = {
    async register(req, res, next) {

        //validation
        const registerSchema = joi.object({
            FirstName: joi.string().min(3).max(30).required(),
            LastName: joi.string().min(3).max(30).required(),
            email: joi.string().email().required(),
            password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            passwordConformation: joi.ref('password')
        })

        const { error } = registerSchema.validate(req.body);

        if (error) {
            return next(error);
        }
        res.json({ msg: "hello mario" })
    }
}

module.exports = registerController;