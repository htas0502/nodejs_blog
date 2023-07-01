// import { engine } from 'express-handlebars';         // Dòng này của phiên bản express-handlebars mới... Ko biết xài nên là Web lỗi!
const handlebars = require('express-handlebars').engine // Xài tạm cái phiên bản cũ này cho ổn.


const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

// Provide static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan("combined"));

// Template Engine
app.engine('handlebars', handlebars({
  // extname: '.hbs'
}));
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources\\views'));
// app.set('views', '/src/resources/views');



// ...
app.get("/", (req, res) => {
    // Test
    // res.send(`
    //   <h1 style="color: green;">Hello World!</h1>
    // `);

    res.render('home');
});

app.get("/news", (req, res) => {
    res.render('news');
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);              // New
    console.log(`Example app listening on http://localhost:${port}`);   // Old
});
