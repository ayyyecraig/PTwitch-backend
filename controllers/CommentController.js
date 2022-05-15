const { Comment, User} = require('../models')

const GetComment = async (req, res) => {
    try {
        const comments = await Comment.findAll({attributes: ["content", "streamerId"]})
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const GetCommentById = async ( req, res) => {
    try{  
        let commentId = parseInt(req.params.comment_id)
        let comment = await Comment.findOne({where: {id: commentId}, 
            include: User, attributes: ["content", "streamerId"]})
            res.send(comment)
    } catch (error) {

        throw error
    }
}

const CreateComment = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)
        let streamerId = parseInt(req.params.streamer_id)
        let newComment = {
            userId,
            streamerId,
            ...req.body 
        }
        const comment = await Comment.create(newComment)
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req, res) => {
    try {
        let commentId = parseInt(req.params.comment_id)
        const updatedComment = await Comment.update(req.body, {where: { id: commentId } })
        res.send(updatedComment)
    } catch (error){
        throw error
    }
}

const DeleteComment = async (req, res) => {
    try {
        let commentId = parseInt(req.params.comment_id)

        await Comment.destroy({ where: { id: commentId}})
        res.send({ message: 'Deleted ${commentId}'})
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetComment,
    GetCommentById,
    CreateComment,
    UpdateComment,
    DeleteComment
}