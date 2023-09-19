let express = require("express")

let app = express()

app.get("/", (_, res) => {
    res.send("(Node.js) Hello, world!\n")
});