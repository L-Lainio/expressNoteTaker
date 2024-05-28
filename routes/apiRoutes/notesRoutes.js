const router = require("express").Router();
let data = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

// GET /api/notes
router.get("/", (req, res) => {
	console.log({ data });
	res.json(data);
});

// DELETE /api/notes/:id
// get one specific note, req.body.id, readfile db.json, find entry that matches that id
router.delete("/:id", (req, res) => {
	// rewrite data and return only elements that DON'T match deleted note ID
	data = data.filter((el) => el.id !== req.params.id);
	fs.writeFile(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify(data),
		function (err) {
			if (err) {
				res.status(404).json({ error: err });
			}
			res.json(data);
		}
	);
});

// POST /api/notes
//   create new UUID, take note out of req.body, apply UUID, save to db.json


function createNewNote(body, notesArray) {
	const newNote = body;

	notesArray.push(newNote);
	fs.writeFileSync(
		path.join(__dirname, '../../db/db.json'),
		JSON.stringify(notesArray, null, 2)
	);
	return newNote;
}

router.post('/', (req, res) => {
	const newNote = createNewNote(req.body, data);
	res.json(newNote);
});




module.exports = router;
