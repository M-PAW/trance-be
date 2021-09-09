const LyricsRouter = require('express').Router();
const findLyrics = require('./Lyrics-Helpers/findLyrics')

LyricsRouter.get('/', (req,res) => {
    const {artist, track} = req.body;
    findLyrics({artist,track}, res)
})

module.exports = LyricsRouter