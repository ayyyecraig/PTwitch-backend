const { Comment, Streamer } = require('../models')

const GetComment = async (req, res) => {
    try {
        const comments = await Comment.findAll({include: Streamer})
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const GetCommentById = async ( req, res) => {
    try{  
        let commentId = parseInt(req.params.comment_id)
        const comment = await Comment.findOne({where: {id: commentId}, 
            include: Streamer, attributes: ["content"]})
            res.send(comment)
    } catch (error) {
        throw error
    }
}

const CreateComment = async (req, res) => {
    try {

        let streamerId = parseInt(req.params.streamer_id)
        let newComment = {
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
        console.log(req.body)
        let commentId = parseInt(req.params.comment_id)
      
        const updatedComment = await Comment.update({content: req.body.content}, {returning: true, where: { id: commentId } }) 
        //    await updatedComment.save()
         console.log(updatedComment, "--------------*")
        
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
