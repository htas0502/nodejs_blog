var express = require('express')
// var app = express();             // Đã nạp ở file index.js trong file src rồi.
var router = express.Router()

const newsController = require('../app/controllers/NewsController')

// newsController.index

// Các tuyễn đường (routes) luôn phải viết theo chiều ngược từ trên xuống do quy tắc đọc từ trên xuống của code. Nó match thằng nào đầu tiên là nó lấy luôn thằng đó (Nên để nó match với mấy thằng có /loằng ngoằng chi tiết đã rồi mới lấy thằng / cơ bản).
router.use('/:slug', newsController.show)
router.use('/', newsController.index)

module.exports = router
