var express = require('express')
// var app = express();             // Đã nạp ở file index.js trong file src rồi.
var router = express.Router()

const coursesController = require('../app/controllers/CourseController')

router.get('/create', coursesController.create)
router.post('/store', coursesController.store)
router.get('/:slug', coursesController.show)

module.exports = router
