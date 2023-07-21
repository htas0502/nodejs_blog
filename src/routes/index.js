const newsRouter = require('./news')
const coursesRouter = require('./courses')
const sitesRouter = require('./sites')

function route(app) {
    // ROUTING

    app.use('/courses', coursesRouter)
    
    // app.get("/news", (req, res) => {
    //     res.render('news');
    // });
    // Bỏ ở trên, sử dụng ở dưới.
    app.use('/news', newsRouter)

    // app.get("/", (req, res) => {
    //     res.render('home');
    // });
    app.use('/', sitesRouter)

    // app.get("/search", (req, res) => {
    //     // console.log(req.query.q);
    //     res.render('search');
    // });
    app.use('/search', sitesRouter)

    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route
