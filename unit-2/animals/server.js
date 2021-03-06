const express = require('express')
const middleware = require('./utils/middleware')

/* Create */
const app = express()

/* Middleware */
middleware(app)

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT))