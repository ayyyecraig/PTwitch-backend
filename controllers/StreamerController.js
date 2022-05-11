
const { Streamer } = require('../models')

const GetStreamers = async (req, res) => {
    try {

        const streamers = await Streamer.findAll({attributes: ["contentType", "name", "schedule", "img"]})
        console.log(streamers)
        res.send(streamers)
    } catch (error) {
        throw error
    }
}

const GetStreamerDetails = async (req, res) => {
    try{
        let streamerId = parseInt(req.params.streamer_id)
        const streamerDetails = await Streamer.findOne({ where:{id: streamerId}, attributes: ["contentType", "name", "schedule", "img"]})
        res.send(streamerDetails)
    } catch (error){
        throw error
    }
}
module.exports = {
    GetStreamers,
    GetStreamerDetails
}