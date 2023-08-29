const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db/db');
const {readdirSync} = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config()
const BASE_URL = process.env.BASE_URL

console.log('BASE_URL:', BASE_URL);


const PORT =process.env.PORT

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use(BASE_URL, require('./routes/' + route)))
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening on port:' ,PORT)
    })
};

server()