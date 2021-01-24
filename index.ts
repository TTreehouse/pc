import express = require("express");
import path = require("path");
const app = express();
import * as db from "./db";
import { FindAverages } from "./dataHandler";

async function init() {
	// Initialize body parser middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	await db.MongoSetup();

	// Set a static folder
	app.use(express.static(path.join(__dirname, "public")));

	// Loads the file ./routes/api/members to handle requests at /api/members
	app.use("/api/answers", require("./routes/api/answers"));

	const PORT = process.env.PORT || 5000;

	app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}

init();
