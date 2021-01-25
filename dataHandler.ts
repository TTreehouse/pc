import * as db from "./db";
import mongoose = require("mongoose");

export let getAverages = (): Promise<number[]> => {
	return new Promise((resolve, reject) => {
		let Answer = db.Answer;
		class totals {
			answerCount: number;
			answerTotal: number;
		}

		let totalsArray: totals[];

		totalsArray = [{ answerCount: 0, answerTotal: 0 }];

		Answer.find({}).then(function (answers) {
			answers.forEach((answer) => {
				answer.answers.forEach((a, i) => {
					if (totalsArray[i] === undefined)
						totalsArray[i] = { answerCount: 0, answerTotal: 0 };

					totalsArray[i].answerCount += 1;
					totalsArray[i].answerTotal += a.answer;
				});
			});

			let averages = [];

			totalsArray.forEach((question, i) => {
				averages[i] = question.answerTotal / question.answerCount;
			});
			resolve(averages);
		});
	});
};

async function getResult() {
	return "greens";
}
