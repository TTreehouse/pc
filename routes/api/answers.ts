import express = require("express");
import mongoose = require("mongoose");
const router = express.Router();
import db = require("../../db");
import { getAverages } from "../../dataHandler";

router.get("/", async (req, res) => {
	let averages = await getAverages();
	res.json(averages);
});

router.post("/", async (req, res) => {
	if (Array.isArray(req.body)) {
		req.body.forEach((a, i) => {
			if (
				a.questionId == undefined ||
				isNaN(a.questionId) ||
				a.answer == undefined ||
				isNaN(a.answer)
			) {
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
