const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, '../db/db.json');

// Helper function to read/initialize data
const getNotesData = () => {
	const dir = path.dirname(dbPath);
	
	// Create the 'db' folder if it doesn't exist
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	// Create 'db.json' with an empty array if it's missing
	if (!fs.existsSync(dbPath)) {
		fs.writeFileSync(dbPath, JSON.stringify([]));
		return []; // Return an empty array since the file was just created
	}

	// Read the file and handle cases where the file might be empty/invalid
	try {
		const fileData = fs.readFileSync(dbPath, 'utf8');
		return JSON.parse(fileData || '[]'); 
	} catch (err) {
		console.error("Error parsing JSON:", err);
		return [];
	}
};

// GET /api/notes
router.get("/", (req, res) => {
	try {
		const notes = getNotesData();
		console.log(notes);
		res.json(notes);
	} catch (err) {
		console.error("Error reading notes:", err);
		res.status(500).json({ error: "Failed to read notes" });
	}
});

// DELETE /api/notes/:id
// get one specific note, req.body.id, readfile db.json, find entry that matches that id
router.delete("/:id", (req, res) => {
	try {
		// rewrite data and return only elements that DON'T match deleted note ID
		let data = getNotesData();
		data = data.filter((el) => el.id !== req.params.id);
		fs.writeFileSync(dbPath, JSON.stringify(data));
		res.json(data);
	} catch (err) {
		console.error("Error deleting note:", err);
		res.status(500).json({ error: "Failed to delete note" });
	}
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
	try {
		const data = getNotesData();
		let newNote = {
			id: uuidv4(),
			title: req.body.title,
			text: req.body.text,
		};
		data.push(newNote);
		fs.writeFileSync(dbPath, JSON.stringify(data));
		res.json(newNote);
	} catch (err) {
		console.error("Error saving note:", err);
		res.status(500).json({ error: "Failed to save note" });
	}
});


module.exports = router;
