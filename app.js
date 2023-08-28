const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db/db');
const {readdirSync} = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
const apiBaseUrl = process.env.API_BASE_URL || '/api/v3';
 
require('dotenv').config()

const PORT =process.env.PORT || 3000 

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use(apiBaseUrl, require('./routes/' + route)))
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening on port:' ,PORT)
    })
};

server()