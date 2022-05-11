const { Playlist, User, Streamer} = require('../models')

const GetPlaylist = async (req, res) => {
    try{
        let playlists = await Playlist.findAll()
        res.send(playlists)
    } catch (error){
        throw error
    }
}

const GetPlaylistDetails = async (req, res) => {
    try{
        let playlistId = parseInt(req.params.playlist_id)
        const playlistDetail = await Playlist.findOne({where: {id: playlistId}, include: Streamer})
        res.send(playlistDetail)
    } catch (error) {
        throw error
    }
}

const CreatePlaylist = async (req,res) => {
    try {
        let userId = parseInt(req.params.user_id)
        let createPlaylist ={
            userId,
            ...req.body
        }
        const playlist = await Playlist.create(createPlaylist)
        res.send(playlist)
    } catch (error) {
        throw error
    }
}

const UpdatePlaylist = async (req, res) => {
    try {
        let playlistId = parseInt(req.params.playlist_id)
        const updatedPlaylist = await Playlist.update(req.body, { where: { id: playlistId} })
        res.send(updatedPlaylist)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPlaylist,
    GetPlaylistDetails,
    CreatePlaylist,
    UpdatePlaylist
}