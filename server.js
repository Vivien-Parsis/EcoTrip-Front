const express = require("express")
const app = express()
const port = process.env.PORT ? process.env.PORT : 4000
const host = ("RENDER" in process.env || process.env.ISDOCKER == "true") ? `0.0.0.0` : `localhost`

app.use('/', express.static('public/page'))
app.use('/assets', express.static('public/assets'))
app.use((req, res, next)=>{
    return res.status(404).sendFile(__dirname + "/public/error/404.html")
})

app.listen({ host: host, port: port }, () =>{
    console.log(`This server is listen on http://${host}:${port}`)
})