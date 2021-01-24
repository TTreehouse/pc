import * as db from "./db";
import mongoose = require("mongoose");

export async function FindAverages() {
	let Answer = db.Answer;
	Answer.find({}).then(function (answers) {
		answers.forEach((answer) => {
			console.log(answer);
		});
	});
}
async function getResult() {
	return "greens";
}
