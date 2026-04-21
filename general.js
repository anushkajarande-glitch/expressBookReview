const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call functions (for testing)
getAllBooks();
getBookByISBN("12345");
getBooksByAuthor("Harper Lee");
getBooksByTitle("The Great Gatsby");
