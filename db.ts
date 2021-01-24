import mongoose = require("mongoose");
let Answer: mongoose.Model<mongoose.Document<any>>;
export { MongoSetup, Answer };
async function MongoSetup(): Promise<any> {
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

		Answer = mongoose.model("answer", answerShema);
	});
}
