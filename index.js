require('dotenv').config();

const express = require('express');
const cors = require('cors');

const LyricsRouter = require('./Routes/Lyrics');
const AuthRouter = require('./Routes/Auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/lyrics', LyricsRouter);
app.use('/auth', AuthRouter);

let PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server Online: ${PORT}`);
})