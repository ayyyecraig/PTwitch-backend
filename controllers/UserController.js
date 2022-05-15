const { User} = require('../models')



const GetUser = async (req, res) => {
    try {
        
        const Users = await User.findAll()
        res.send(Users)
        console.log(Users, "four")
    } catch (error) {
        throw error
    }
}

const  GetUserById = async (req, res) => {
    try{
        console.log(req.params.user_id, "five")
        let userId = parseInt(req.params.user_id)
        const user = await User.findByPk(userId)
        res.send(user)

    } catch (error) {
        throw error
    }
}



module.exports = {
    GetUser,
    GetUserById
}