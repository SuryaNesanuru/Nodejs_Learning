const express = require("express")
const app = express()
app.get("/hi", (req, res) => res.send("Hello from Node"))
app.listen(3000, () => console.log("Server on 3000"))