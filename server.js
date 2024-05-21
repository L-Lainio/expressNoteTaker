const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Get route which sends b/public/index.html page
app.get("/assets/css/styles.css", (req, res) => {
	res.set("Content-Type", "text/css");
	res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
});

// Get route which sends back the notes.html page
app.get("/notes", (req, res) =>
	res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Get route -> which reads the db.json file and sends back the parsed JSON data
app.get("/api/notes", function (req, res) {
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		var jsonData = JSON.parse(data);
		console.log(jsonData);
		res.json(jsonData);
	});
});

// Reads the newly added notes from the request body and then adds them to the db.json file
const readThenAppendToJson = (content, file) => {
	fs.readFile(file, "utf8", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			const parsedData = JSON.parse(data);
			parsedData.push(content);
			writeNewNoteToJson(file, parsedData);
		}
	});
};

// Writes data to db.json -> utilized within the readThenAppendToJson function
const writeNewNoteToJson = (destination, content) =>
	fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
		err ? console.error(err) : console.info(`\nData written to ${destination}`)
	);

// Post route -> receives a new note, saves it to request body, adds it to the db.json file, and then returns the new note to the client
app.post("/api/notes", (req, res) => {
	const { title, text } = req.body;
	if (title && text) {
		const newNote = {
			title: title,
			text: text,
			id: uuid(),
		};

		readThenAppendToJson(newNote, "./db/db.json");

		const response = {
			status: "success",
			body: newNote,
		};

		res.json(response);
	} else {
		res.json("Error in posting new note");
	}
});

// Delete route -> reads the db.json file, uses the json objects uuids to match the object to be deleted, removes that object from the db.json file, then re-writes the db.json file
app.delete("/api/notes/:id", (req, res) => {
	let id = req.params.id;
	let parsedData;
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			parsedData = JSON.parse(data);
			const filterData = parsedData.filter((note) => note.id !== id);
			writeNewNoteToJson("./db/db.json", filterData);
		}
	});
	res.send(`Deleted note with ${req.params.id}`);
});

// App.listen is used to spin up our local server
app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT} 🚀`)
);
