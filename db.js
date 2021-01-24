"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = exports.MongoSetup = void 0;
const mongoose = require("mongoose");
let Answer;
exports.Answer = Answer;
async function MongoSetup() {
    mongoose.connect("mongodb://localhost:27017/pq", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", async () => {
        // Connection achieved.
        const answerShema = new mongoose.Schema({
            answers: [{ questionId: Number, answer: Number }],
        });
        exports.Answer = Answer = mongoose.model("answer", answerShema);
    });
}
exports.MongoSetup = MongoSetup;
//# sourceMappingURL=db.js.map