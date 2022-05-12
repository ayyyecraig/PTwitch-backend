const Router = require('express').Router()
const controller = require('../controllers/StreamerController')
const middleware = require('../middleware')

Router.get('/', controller.GetStreamers)

Router.get('/:streamer_id', controller.GetStreamerDetails)

Router.put('/:user_id', middleware.stripToken, middleware.verifyToken, controller.AddStreamer)

module.exports = Router