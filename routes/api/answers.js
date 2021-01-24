"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const dataHandler_1 = require("../../dataHandler");
router.get("/", async (req, res) => {
    dataHandler_1.FindAverages();
    res.send("<h1>html</h1>" + "<!-- Eeeeee -->");
});
module.exports = router;
//# sourceMappingURL=answers.js.map