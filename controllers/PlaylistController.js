const { Playlist, User } = require('../models')

const GetPlaylist = async (req, res) => {
    try{
        const playlists = await Playlist.findAll({ include: User})
        res.send(playlists)
    } catch (error){
        throw error
    }
}

const GetPlaylistDetails = async (req, res) => {
    try{
        let playlistId = parseInt(req.params.playlist_id)
        const playlistDetail = await Playlist.findOne({where: {id: playlistId}, include: User})
        res.send(playlistDetail)
    } catch (error) {
        throw error
    }
}
module.exports = {
    GetPlaylist,
    GetPlaylistDetails
}