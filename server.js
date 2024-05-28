const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const apiRoutes = require('./routes');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api',apiRoutes);

app.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});


//App listens with front end on this port

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
