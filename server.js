const express = require('express');
const {notesRoute} = require('./routes')
const htmlroutes = require('./routes/htmlroutes')

let PORT = process.env.PORT ?? 3001
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/',htmlroutes)
app.use('/api',notesRoute)





app.listen(PORT, () => {
    console.log(`express server listening for request on localhost:${PORT}`)
})
