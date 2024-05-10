/** @format */

const { Router } = require("express");
const fs = require("fs/promises");
const db = require("../db/db.json");

const notesRoute = Router();
const dbObj = fs.readFile(db);
console.log(dbObj);

notesRoute.get("/", (req, res) => {
	console.log("getting all notes");
	console.log({ req, res });

	res.status(200).json(db);
});

notesRoute.get("/:id", (req, res) => {
	res.send(req.params.id);
});

notesRoute.post("/", (req, res) => {
	console.log("POST request to the /api/notes to create a new note");
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});

notesRoute.patch("/:id", (req, res) => {
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});


var bodyParser = require('body-parser');
app.use(bodyParser.json());

notesRoute.delete('/:id',(req, res) => {
  const { id } = req.params;
  res.send(`Delete note with id ${id}`);
});

module.exports = { notesRoute };
