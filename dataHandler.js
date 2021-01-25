"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverages = void 0;
const db = require("./db");
let getAverages = () => {
    return new Promise((resolve, reject) => {
        let Answer = db.Answer;
        class totals {
        }
        let totalsArray;
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
exports.getAverages = getAverages;
async function getResult() {
    return "greens";
}
//# sourceMappingURL=dataHandler.js.map