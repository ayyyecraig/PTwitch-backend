const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StreamerRouter = require('./StreamerRouter')
const PlaylistRouter = require('./PlaylistRouter')
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')


Router.use('/users', UserRouter)
Router.use('/streamers', StreamerRouter)
Router.use('/playlists', PlaylistRouter)
Router.use('/auth', AuthRouter)
Router.use('/comments', CommentRouter)

module.exports = Router