const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/mydb'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

MongoClient.connect(url, (err, db) => err ? throw err : )

app.listen(PORT, () => console.log(`API running on port ${PORT}`))

app.get('/', (req, res) => res.send('Api path / here'))