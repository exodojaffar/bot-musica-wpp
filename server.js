const express = require("express");
const cors = require("cors");

const app = express();

app
.use(cors())

.get("/", function (req, res) {
	res.send("Hello World!")
})

.listen(3000)
