const {Router} = require('express')
const db = require('../db/db.json')

const notesRoute = Router()

notesRoute.get('/', (req, res) => {
    console.log('getting all notes');
    console.log({req,res});

    const dbObj = JSON.parse(db)

    res.status(200).json(db)


})

app.post('/', (req, res) => {
  res.send('POST request to the /api/notes to create a new note')
})











module.exports ={notesRoute}
