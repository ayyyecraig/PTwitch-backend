
const { Streamer, User } = require('../models')

const GetStreamers = async (req, res) => {
    try {
        const streamers = await Streamer.findAll({include: User})
        res.send(streamers)
    } catch (error) {
        throw error
    }
}

const GetStreamerDetails = async (req, res) => {
    try{
        let streamerId = parseInt(req.params.streamer_id)
        const streamerDetails = await Streamer.findOne({where: {id: streamerId } })
        res.send(streamerDetails)
    } catch (error){
        throw error
    }
}
module.exports = {
    GetStreamers,
    GetStreamerDetails
}