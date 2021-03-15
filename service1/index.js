const express = require("express");

const SERVICE_PORT = 3000;

const app = express();

app.get('/', (req, res) => res.send(`Hello ${req.header("host")} from service1.`));

app.listen(SERVICE_PORT, () => console.log(`App listening on ${SERVICE_PORT}`));