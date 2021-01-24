"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");
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
//# sourceMappingURL=index.js.map