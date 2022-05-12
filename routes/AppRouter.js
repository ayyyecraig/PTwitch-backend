const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StreamerRouter = require('./StreamerRouter')
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')


Router.use('/users', UserRouter)
Router.use('/streamers', StreamerRouter)
Router.use('/comments', CommentRouter)
Router.use('/auth', AuthRouter)


module.exports = Router