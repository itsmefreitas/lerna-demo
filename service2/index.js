const express = require('express')

const SERVICE_PORT = 3001

const app = express()

app.get('/', (req, res) => res.send(`Hello ${req.header('host')} from service2.`))

app.listen(SERVICE_PORT, () => console.log(`App listening on ${SERVICE_PORT}`))
