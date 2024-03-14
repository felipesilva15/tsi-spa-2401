const fs = require('fs');

const books = JSON.parse(fs.readFileSync('./src/data/books.json', 'utf-8'));

exports.getBooks = () => {
    return books;
}

/**
 * Retorna os livros filtrados pelo titulo
 * @param {string} title
 * @returns {Array}
 */
exports.getBooksByTitle = (title) => {
    return books.find((book) => {
        return book.title.toLowerCase().includes(title.toLowerCase());
    });
};