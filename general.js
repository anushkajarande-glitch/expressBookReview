const axios = require("axios");

/**
 * Fetch books by author using async/await and Axios
 * @param {string} author - name of the author
 */
async function getBooksByAuthor(author) {
    try {
        // API call to fetch books by author
        const response = await axios.get(
            `http://localhost:5000/books/author/${author}`
        );

        // return data from API
        return response.data;

    } catch (error) {
        console.error("Error fetching books by author:", error.message);
        return { error: "Unable to fetch books" };
    }
}

// Example usage (optional testing)
getBooksByAuthor("Author A").then(data => console.log(data));

module.exports = getBooksByAuthor;
