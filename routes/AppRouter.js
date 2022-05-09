const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StreamerRouter = require('./StreamerRouter')
const PlaylistRouter = require('./PlaylistRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/user', UserRouter)
Router.use('/streamers', StreamerRouter)
Router.use('/playlists', PlaylistRouter)
Router.use('/comments', CommentRouter)
module.exports = Router