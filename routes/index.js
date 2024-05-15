/** @format */

const { Router } = require("express");
const fs = require("fs/promises");
const db = require("../db/db.json");

const notesRoute = Router();

notesRoute.get("/notes", async(req, res) => {
	console.log("getting all notes");
	console.log({ req, res });
	let allnotes = await fs.readFileAsync("../db/db.json", "utf8");
	console.log("string hello",allnotes);
	res.status(200).json(allnotes);
});

notesRoute.get("/notes/:id", (req, res) => {
	res.send(req.params.id);
});

notesRoute.post("/notes", (req, res) => {
	console.log("POST request to the /api/notes to create a new note");
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});

notesRoute.patch("/:id", (req, res) => {
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});

notesRoute.delete("/:id", (req, res) => {
	const { id } = req.params;
	res.send(`Delete note with id ${id}`);
});

module.exports = { notesRoute };
