
const { Streamer, User } = require('../models')

const GetStreamers = async (req, res) => {
    try {

        const streamers = await Streamer.findAll({attributes: ["id","contentType", "name", "schedule", "img"]})
        console.log(streamers)
        res.send(streamers)
    } catch (error) {
        throw error
    }
}

const GetStreamerDetails = async (req, res) => {
    try{
        let streamerId = parseInt(req.params.streamer_id)
        const streamerDetails = await Streamer.findOne({ where:{id: streamerId}})
        console.log(streamerDetails)
        res.send(streamerDetails)
    } catch (error){
        throw error
    }
}


const AddStreamer = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)

        let streamerList = {
            userId,
             ...req.body
        }
        const streamer = await Streamer.update(streamerList)
        res.send(streamer)
    } catch (error) {
        throw error
    }
}


const UpdateStreamer = async (req, res) => {
    try {
        let streamerId = parseInt(req.params.streamer_id)
        const updateStreamer =
        await Streamer.update( req.body, { where: { id: streamerId } })
        res.send(updateStreamer)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetStreamers,
    GetStreamerDetails,
    AddStreamer,
    UpdateStreamer
}