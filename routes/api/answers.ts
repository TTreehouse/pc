import express = require("express");
const router = express.Router();
import db = require("../../db");
import { FindAverages } from "../../dataHandler";

router.get("/", async (req, res) => {
	FindAverages();
	res.send("<h1>html</h1>" + "<!-- Eeeeee -->");
});

module.exports = router;
