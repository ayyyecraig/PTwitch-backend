const Router = require('express').Router()
const controller = require('../controllers/StreamerController')

Router.get('/', controller.GetStreamers)

Router.get('/:streamer_id', controller.GetStreamerDetails)

module.exports = Router