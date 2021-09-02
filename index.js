require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let PORT = process.env.PORT || 5050;


app.get('/', (req,res) => {
    res.status(200).send('Server Online!')
});

app.listen(PORT, () => {
    console.log(`Server Online: ${PORT}`);
})