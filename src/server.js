const express = require('express')
const routes = require('./routes')

const app = express()
app.use(routes)

require('dotenv/config')

const PORT = process.env.PORT
const HOST = process.env.HOST
app.listen(PORT, HOST, () => console.log(`Server is running on http://${HOST}:${PORT}`))