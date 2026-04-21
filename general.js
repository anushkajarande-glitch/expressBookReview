const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    const res = await axios.get(`${BASE_URL}/books`);
    return res.data;
}

// Get by ISBN
async function getBookByISBN(isbn) {
    const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    return res.data;
}

// Get by author
async function getBooksByAuthor(author) {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    return res.data;
}

// Get by title
async function getBooksByTitle(title) {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    return res.data;
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};