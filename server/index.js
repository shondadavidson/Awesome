require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')

const ctrl = require('./controllers/controller');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env


const app = express();
app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database up')
})

app.listen(SERVER_PORT, '0.0.0.0', () => {
    console.log('server up')
})

app.get('/api/houses', ctrl.getAll)