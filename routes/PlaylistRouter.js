const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')
const middleware = require('../middleware')

Router.get('/', controller.GetPlaylist)

Router.get('/:playlist_id', controller.GetPlaylistDetails)

Router.post('/:user_id', middleware.stripToken, middleware.verifyToken, controller.CreatePlaylist)

Router.put('/:playlist_id', middleware.stripToken, middleware.verifyToken, controller.UpdatePlaylist)

module.exports = Router