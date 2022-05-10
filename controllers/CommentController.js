const { Comment, User} = require('../models')

const GetComment = async (req, res) => {
    try {
        const comments = await Comment.findAll({attributes: ["content", "playlistId"]})
        res.json(comments)
    } catch (error) {
        throw error
    }
}

const GetCommentById = async ( req, res) => {
    try{  
        console.log(req.params, "bananas")
        let commentId = parseInt(req.params.comment_id)
        let comment = await Comment.findOne({where: {id: commentId}, 
            include: User, attributes: ["content", "playlistId"]})
            res.send(comment)
            console.log(comment)
    } catch (error) {

        throw error
    }
}

const PostComment = async (req, res) => {
    try {
        let userId = parseint(req.params.user_id)
        let playlistId = parseInt(req.params.playlist_id)
        let newComment = {
            userId,
            playlistId,
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
    PostComment,
    UpdateComment,
    DeleteComment
}