const express = require('express');
const cors = require('cors');
const { MongoClient } = require("mongodb");
const bookService = require('./services/book-service')

const port = 8000;
const app = express();
app.use(cors());

const uri = 'mongodb+srv://felipesilva15:Kz6C6KTC1XlpmXrz@main-cluster.mbq4el8.mongodb.net/'
const client = new MongoClient(uri);

app.get('/books', (req, res) => {
    res.status(200).json(bookService.getBooks());
});

app.get('/mongo/books', async (req, res) => {
    const db = client.db('main-cluster');
    const collection = db.collection('books');

    const query = {} //{title: {$not: {$eq: null}}};

    const options = {
      // Sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 1, title: 1, author: 1},
    };

    const books = collection.find(query, options);

    // Print a message if no documents were found
    if ((await collection.countDocuments(query)) === 0) {
        res.status(200).json({message: 'No documents found!'});
    }

    let data = [];

    for await (const book of books) {
        data.push(book);
    }
      
    res.status(200).json(data);
})

app.get('/mongo/books/insert', async (req, res) => {
    if (!req.query.title || !req.query.author) {
        res.status(400).json({message: 'Dados inválidos!'});
    }

    const db = client.db('main-cluster');
    const collection = db.collection('books');

    const doc = {
        title: req.query.title,
        author: req.query.author
    }

    const result = await collection.insertOne(doc);

    console.log(result);
    res.status(200).json(result);
})

app.delete('/mongo/books/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({message: 'ID não informado!'});
    }

    const db = client.db('main-cluster');
    const collection = db.collection('books');

    const result = await collection.deleteOne({ _id: req.params.id });

    console.log(result);

    if (result.deletedCount === 0) {
        res.status(200).json({message: 'No document finded!'});
    } 

    res.status(200).json({message: 'Document successfully deleted!'});
})

app.get('/books/:title', (req, res) => {
    res.status(200).json(bookService.getBooksByTitle(req.params.title));
    //res.status(200).json(req.params.title.toLowerCase());
});

app.listen(port, () => {
    console.log(`lintening on port ${port}`);
});