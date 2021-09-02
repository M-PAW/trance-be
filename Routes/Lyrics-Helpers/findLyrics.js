const findLyrics = async (req,res,lyricsFinder) => {
    const lyrics = await lyricsFinder(req.query.artist, req.query.track) || "No Lyrics Available";

    res.status(200).json({lyrics})

}

module.exports = findLyrics;