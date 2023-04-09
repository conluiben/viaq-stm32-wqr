const Joi = require("joi")

module.exports = {
    register(req, res, next){
        // 2023 reference: https://joi.dev/api/?v=17.9.1
        // also referred to YT comments in Part 2 
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
            // must pass a regex condition, alphanumeric chars., 8-32 chars length
        })
        
        // ! deprecated
        // const {error, value} = Joi.validate(req.body, schema)
        const {error, value} = schema.validate(req.body)
        
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You should provide valid email address!"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: "Password must be: alphanumeric, 8-32 characters only!"
                    })
                    break
                default:
                    res.status(400).send({
                        error: "Invalid information! (default case landed)"
                    })
            }
        } else {
            next()
        }
    }
}