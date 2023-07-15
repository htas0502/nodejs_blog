var express = require('express')
// var app = express();             // Đã nạp ở file index.js trong file src rồi.
var router = express.Router()

const sitesController = require('../app/controllers/SitesController')

// sitesController.index

// Các tuyễn đường (routes) luôn phải viết theo chiều ngược từ trên xuống do quy tắc đọc từ trên xuống của code. Nó match thằng nào đầu tiên là nó lấy luôn thằng đó (Nên để nó match với mấy thằng có /loằng ngoằng chi tiết đã rồi mới lấy thằng / cơ bản).
router.use('/search', sitesController.search)
router.use('/', sitesController.index)

module.exports = router
