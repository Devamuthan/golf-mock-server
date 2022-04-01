const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const articleController = require('./src/controllers/article');

const app = express();

const PORT = process.env.SERVER_PORT

const corsConfig = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    console.log('Welcome to Golf_Mock_Server')
    res.json({message: 'Welcome to Golf_Mock_Server'}).end();
});

app.use('/article', articleController);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));