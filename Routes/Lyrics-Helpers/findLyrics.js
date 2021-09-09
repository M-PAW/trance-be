const lyricsFinder = require('lyrics-finder');
const findLyrics = async (req,res) => {
    const lyrics = await lyricsFinder(req.artist, req.track) || "No Lyrics Available";
    res.status(200).json({lyrics})
}

module.exports = findLyrics;