const Router = require('express').Router()
const controller = require('../controllers/StreamerController')


Router.get('/', controller.GetStreamers)

Router.get('/:streamer_id', controller.GetStreamerDetails)

Router.post('/:user_id',  controller.AddStreamer)

Router.put('/:streamer_id', controller.UpdateStreamer)

Router.delete(
    '/:streamer_id',  controller.DeleteStreamer
)


module.exports = Router