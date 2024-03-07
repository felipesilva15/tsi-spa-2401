const express = require('express');
const bookService = require('./services/book-service')

const port = 8000;
const app = express();

app.get('/books', (req, res) => {
    res.status(200).json(bookService.getBooks());
});

app.get('/books/:title', (req, res) => {
    res.status(200).json(bookService.getBooksByTitle(req.params.title));
    //res.status(200).json(req.params.title.toLowerCase());
});

app.listen(port);