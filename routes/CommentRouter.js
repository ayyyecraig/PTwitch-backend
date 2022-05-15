const Router = require('express').Router()
const controller = require('../controllers/CommentController')


Router.get('/streamers/:streamer_id', controller.GetComment)

Router.get('/:comment_id', controller.GetCommentById)

Router.post( '/:streamer_id', controller.CreateComment)

Router.put('/:comment_id', controller.UpdateComment)

Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router