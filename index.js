require('dotenv').config()

const knexConfig = require('./knexfile')[process.env.ENV];
const db = require('knex')(knexConfig)
// db('usersTemp').insert({ username: 'Lee' }).then(data => console.log(data.rowCount)).catch(err => console.log(err.message))
db('usersTemp').then(data => console.log('users: ', data)).catch(err => console.log(err.message))

const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`listening on port ${port}`))