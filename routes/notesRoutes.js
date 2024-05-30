const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");


// GET /api/notes
router.get("/", (req, res) => {
	const data = JSON.parse(fs.readFileSync("db/db.json"));// Define the 'data' variable
	console.log(data);
	res.json(data);
});

// DELETE /api/notes/:id
// get one specific note, req.body.id, readfile db.json, find entry that matches that id
router.delete("/:id", (req, res) => {
	// rewrite data and return only elements that DON'T match deleted note ID
	let data = JSON.parse(fs.readFileSync("db/db.json"));
	data = data.filter((el) => el.id !== req.params.id);
	fs.writeFileSync("db/db.json", JSON.stringify(data));
	res.json(data);
});

// POST /api/notes
//   create new UUID, take note out of req.body, apply UUID, save to db.json


/*function createNewNote(body, notesArray, title, text) {
	const newNote = body; title; text;

	notesArray.push(newNote);
	fs.writeFileSync(
		path.join(__dirname, '../../db/db.json'),
		JSON.stringify(notesArray, null, 2)
	);
	return newNote;
}*/

router.post('/', (req, res) => {
	/*const note = createNewNote(req.body, data);
	console.log(note);
	res.json(note);*/
	const data = JSON.parse(fs.readFileSync("db/db.json"));// Define the 'data' variable
	let newNote = {
		id: uuidv4(),
		title: req.body.title,
		text: req.body.text,
	};
	data.push(newNote);
	fs.writeFileSync("db/db.json", JSON.stringify(data));
	res.json(data);
});


module.exports = router;
