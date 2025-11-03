const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({path: '.env', quiet: true});
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded);
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || 3000;
const MONGO_URI = 'mongodb+srv://leavingnadirinc_db_user:QlTxikZoVNbNOOIB@cluster0.tesybc4.mongodb.net/pos-system-devops?appName=Cluster0';

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => console.error('Failed to connect to MongoDB', error))

app.get('/test', (req, resp) => {
    return resp.json({'message':'Server Started..'});
});