const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    // [GET] /
    index(req, res, next) {

        // Course.find({}, function(err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     }
        //     else {
        //         res.status(400).json({ error: 'ERROR' });
        //     }
        // })
        // MongooseError: Model.find() no longer accepts a callback
        // Instead:
        Course.find()
            .then((courses) => {
                // res.json(courses);

                // courses = courses.map((course) => course.toObject());
                // res.render('home', { courses: courses });

                res.render('home', { courses: multipleMongooseToObject(courses) });
            })
            .catch((error) => { 
                next(error);
            });
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SitesController()
