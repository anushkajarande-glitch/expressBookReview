const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Get all books
async function getAllBooks(req, res) {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books" });
    }
}

// Get book by ISBN
async function getBookByISBN(req, res) {
    const isbn = req.params.isbn;

    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        if (books[isbn]) {
            return res.status(200).json(books[isbn]);
        } else {
            return res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error fetching book" });
    }
}

// Get books by Author
async function getBooksByAuthor(req, res) {
    const author = req.params.author.toLowerCase();

    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const filteredBooks = Object.keys(books).filter(key =>
            books[key].author.toLowerCase() === author
        );

        if (filteredBooks.length > 0) {
            let result = {};
            filteredBooks.forEach(key => {
                result[key] = books[key];
            });
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "No books found for this author" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books by author" });
    }
}

// Get books by Title
async function getBooksByTitle(req, res) {
    const title = req.params.title.toLowerCase();

    try {
        const response = await axios.get(`${BASE_URL}/books`);
        const books = response.data;

        const filteredBooks = Object.keys(books).filter(key =>
            books[key].title.toLowerCase() === title
        );

        if (filteredBooks.length > 0) {
            let result = {};
            filteredBooks.forEach(key => {
                result[key] = books[key];
            });
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "No books found for this title" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books by title" });
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
