const AuthRouter = require('express').Router();
import login from './Auth-Helpers/login';
import refresh from './Auth-Helpers/refresh';
const SpotifyWebApi = require('spotify-web-api-node');
const login = require('./Auth-Helpers/login');
const refresh = require('./Auth-Helpers/refresh');

AuthRouter.post('/login', (req,res) => {
    login(res,res,SpotifyWebApi)
});

AuthRouter.post('/refresh', (req,res) => {
    refresh(req,res,SpotifyWebApi)
});

module.exports = AuthRouter;