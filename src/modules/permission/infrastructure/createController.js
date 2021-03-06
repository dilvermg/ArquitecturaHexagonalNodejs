const { createCase } = require('../application')
const {authPerRepository} = require('./repositories')
const {error, response} = require('./serializer')

module.exports = {
    invoke(req, res) {
        const handler = new createCase(authPerRepository)
        handler.execute(req.body).then(group => response.valid({status: 201, data: group}, res))
            .catch(e => error.jsonError(e, res))
    }
}
