require('dotenv').config();

const login = (req,res,SpotifyWebApi) => {
    const code = req.body.code;
    const SpotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        cliendId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    SpotifyApi.authorizationCodeGrant(code)
    .then((data) => {
        res.status(200).json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            exiresIn: data.body.expires_in
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send('There was an error')
    })

}

module.exports = login;