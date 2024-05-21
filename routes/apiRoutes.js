const Router = require("express");
const fs = require("fs/promises");
const db = require("../db/db.json");
const path = require("path");
const express = require("express");

var uuid = require("uuid");

const apiRoutes = Router();

apiRoutes.get("/notes", async(req, res) => {
	console.log("getting all notes");
	console.log({ req, res });
	let allnotes = await fs.readFileAsync("../db/db.json", "utf8");
	console.log("string hello",allnotes);
	res.status(200).json(allnotes);
});

apiRoutes.get("/notes/:id", (req, res) => {
	res.send(req.params.id);
});

apiRoutes.post("/notes", (req, res) => {
	console.log("POST request to the /api/notes to create a new note");
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});

apiRoutes.patch("/:id", (req, res) => {
	const { id, title, text } = req.body;
	res.send(`title ${id} ${title}, desc ${text}`);
});

apiRoutes.delete("/:id", (req, res) => {
	const { id } = req.params;
	res.send(`Delete note with id ${id}`);
});

module.exports = apiRoutes;
