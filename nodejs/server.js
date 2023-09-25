let express = require("express");

let app = express();

app.get("/", (_, res) => {
    res.send("(Node.js) Hello, world!\n");
});

app.listen(3001, () => console.log("Started server on port 3001"));