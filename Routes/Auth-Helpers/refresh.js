require('dotenv').config();

const refresh = (req,res,SpotifyWebApi) => {
    const refreshToken = req.body.refreshToken;

    const SpotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        cliendId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: refreshToken
    });

    SpotifyApi.refreshAccessToken()
    .then((data) => {
        res.status(200).json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn
        });

        SpotifyApi.setAccessToken(data.body('access_token'));
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send('There was an error')
    })
}