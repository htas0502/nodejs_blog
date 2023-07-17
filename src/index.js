// import { engine } from 'express-handlebars';         // Dòng này của phiên bản express-handlebars mới... Ko biết xài nên là Web lỗi!
const handlebars = require('express-handlebars').engine // Xài tạm cái phiên bản cũ này cho ổn.

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')

const db = require('./config/db')
// Connect to DB
db.connect();

// Provide static file
app.use(express.static(path.join(__dirname, 'public')))

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// HTTP Logger
app.use(morgan('combined'))

// Template Engine
app.engine(
    'handlebars',
    handlebars({
        // extname: '.hbs'
    }),
)
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'resources\\views'))
// app.set('views', '/src/resources/views');

// Routes Init (function)
route(app)

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`);              // New
    console.log(`Example app listening on http://localhost:${port}`) // Old
})
