import mongoose = require("mongoose");
let Answer: mongoose.Model<mongoose.Document<any>>;
export { MongoSetup, Answer };
function MongoSetup(): any {
	mongoose.connect("mongodb://localhost:27017/pc", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = mongoose.connection;

	db.on("error", console.error.bind(console, "connection error: "));
	db.once("open", () => {
		// Connection achieved.

		const answerShema = new mongoose.Schema({
			answers: [{ questionId: Number, answer: Number }],
		});

		Answer = mongoose.model("answer", answerShema);
	});
}
