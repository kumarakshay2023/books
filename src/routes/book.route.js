const express = require('express');
const booksController = require('../controllers/book.controller');
const router = express.Router();


router.post('/',booksController.addBooks);
router.get('/',booksController.getAllBooks);

module.exports=router;