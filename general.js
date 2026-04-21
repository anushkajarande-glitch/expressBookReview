const axios = require("axios");

/**
 * Get books by AUTHOR
 */
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `http://localhost:5000/books/author/${author}`
        );

        if (!response.data || response.data.length === 0) {
            return { message: "No books found for this author" };
        }

        return response.data;

    } catch (error) {
        return {
            message: "Error retrieving books by author",
            error: error.message
        };
    }
}

/**
 * Get books by TITLE
 */
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `http://localhost:5000/books/title/${title}`
        );

        if (!response.data || response.data.length === 0) {
            return { message: "No books found for this title" };
        }

        return response.data;

    } catch (error) {
        return {
            message: "Error retrieving books by title",
            error: error.message
        };
    }
}

/**
 * Get book by ISBN
 */
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(
            `http://localhost:5000/books/isbn/${isbn}`
        );

        if (!response.data || response.data === "Book not found") {
            return { message: "No book found for this ISBN" };
        }

        return response.data;

    } catch (error) {
        return {
            message: "Error retrieving book by ISBN",
            error: error.message
        };
    }
}

module.exports = {
    getBooksByAuthor,
    getBooksByTitle,
    getBookByISBN
};
