const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')


Router.get('/', controller.GetPlaylist)

Router.get('/playlist/:playlist_id', controller.GetPlaylistDetails)

module.exports = Router