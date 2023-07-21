const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // Test
        // res.send('Course Detail!!! - ' + req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        // Test
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        // Test
        // res.json(req.body)

        const formData = req.body;
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/2.png`
        const course = new Course(formData)

        course.save()
            .then(() => res.redirect('/'))
            .catch((error) => {
                
            })

        // res.send('Course Saved!')
    }
}

module.exports = new CourseController()
