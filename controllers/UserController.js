const { User } = require('../models')


const GetUser = async (req, res) => {
    try {
        const allUsers = await User.findAll()
        res.send(allUsers)
    } catch (error) {
        throw error
    }
}

const  GetUserById = async (req, res) => {
    try{
        let userId = parseInt(req.params.user_id)
        const user = await User.findOne({where: {id: userId}})
        res.send(user)

    } catch (error) {
        throw error
    }
}



module.exports = {
    GetUser,
    GetUserById
}