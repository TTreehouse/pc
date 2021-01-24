"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAverages = void 0;
const db = require("./db");
async function FindAverages() {
    let Answer = db.Answer;
    Answer.find({}).then(function (answers) {
        answers.forEach((answer) => {
            console.log(answer);
        });
    });
}
exports.FindAverages = FindAverages;
async function getResult() {
    return "greens";
}
//# sourceMappingURL=dataHandler.js.map