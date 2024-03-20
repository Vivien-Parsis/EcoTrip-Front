const express = require("express")
const app = express()
const port = process.env.PORT ? process.env.PORT : 4000
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`

app.use('/', express.static('public/page'))
app.use('/assets', express.static('public/assets'))

app.listen({ host: host, port: port }, () =>{
    console.log(`This server is listen on http://${host}:${port}`)
})