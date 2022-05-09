const Router = require('express').Router()
const controller = require('../controllers/StreamerController')

Router.get('/playlists', controller.GetStreamers)
Router.get( '/playlists/:streamer_id', controller.GetStreamerDetails)

module.exports = Router