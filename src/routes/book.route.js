const express = require('express');
const booksController = require('../controllers/book.controller');
const router = express.Router();


router.post('/',booksController.addBooks);
router.get('/',booksController.getAllBooks);
router.get('/:id',booksController.getBookById);
router.put('/:id',booksController.bookUpdate);

module.exports=router;