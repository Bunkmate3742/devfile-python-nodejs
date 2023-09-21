let express = require("express");

let app = express();

app.get("/", (_, res) => {
    res.send("(Node.js) Hello, world!\n");
});

app.listen(3003, () => console.log("Started server on port 3002"));