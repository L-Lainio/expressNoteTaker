const express = require('express');
const {notesRoute} = require('./routes')


let PORT = process.env.PORT ?? 3001
const app = express();
app.use(express.json())
app.use('/api/notes',)





app.listen(PORT, () => {
    console.log(`express server listening for request on localhost:${PORT}`)
})
