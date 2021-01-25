"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const db = require("../../db");
const dataHandler_1 = require("../../dataHandler");
router.get("/", async (req, res) => {
    let averages = await dataHandler_1.getAverages();
    res.json(averages);
});
router.post("/", async (req, res) => {
    if (Array.isArray(req.body)) {
        req.body.forEach((a, i) => {
            if (a.questionId == undefined ||
                isNaN(a.questionId) ||
                a.answer == undefined ||
                isNaN(a.answer)) {
                res.status(400).end();
                return;
            }
        });
        // All passed
        let answerDoc = new db.Answer();
        //Ignored due to ts being annoyed about typing when it is guaranteed for answerdoc to have answers
        // @ts-ignore
        answerDoc.answers = req.body;
        answerDoc.save();
        res.json(answerDoc);
        return;
    }
    res.status(400).end();
});
module.exports = router;
//# sourceMappingURL=answers.js.map