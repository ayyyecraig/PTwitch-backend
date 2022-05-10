const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.GetComment)

Router.get('/:comment_id', controller.GetCommentById)

Router.post( '/:user_id/:playlist_id', middleware.stripToken, middleware.verifyToken, controller.PostComment)

Router.put('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.UpdateComment)

Router.delete('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.DeleteComment)

module.exports = Router