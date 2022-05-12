
const { Streamer, User } = require('../models')

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


const AddStreamer = async (req, res) => {
    try {
        let playlistId = parseInt(req.params.playlist_id)

        let streamerList = {
            playlistId, ...req.body
        }
        const streamer = await Streamer.update(streamerList)
        res.send(streamer)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetStreamers,
    GetStreamerDetails,
    AddStreamer
}