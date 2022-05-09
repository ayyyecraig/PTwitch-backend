const { Comment, User } = require('../models')

const GetComment = async (req, res) => {
    try {
        const comments = await Comment.findAll({include: User})
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const GetCommentById = async ( req, res) => {
    try{
        let commentId = parseInt(req.params.comment_id)
        const comment = await Comment.findOne({where: {id: commentId}, include: User},
            res.send(comment))
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetComment,
    GetCommentById
}