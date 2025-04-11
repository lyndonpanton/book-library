import { useState } from 'react';

function Form() {
    // New book: isbn, title, author, release_year, cover_url, total_pages
    const [newISBN, getNewISBN] = useState(0);
    const [newTitle, getNewTitle] = useState("");
    const [newAuthor, getNewAuthor] = useState("");
    const [newReleaseYear, getNewReleaseYear] = useState(0);
    const [newCoverURL, getNewCoverURL] = useState("");
    const [newTotalPages, getNewTotalPages] = useState(0);

    function submitNewBook(e) {
        e.preventDefault();
    }

    return (
        <form id="book-form" onSubmit={ (e) => submitNewBook(e) }>
            <label htmlFor="isbn">ISBN</label>
            <input type="text" name="isbn" />

            <label htmlFor="title">Title</label>
            <input type="text" name="title" />

            <label htmlFor="author">Author</label>
            <input type="text" name="author" />

            <label htmlFor="release_year">Release Year</label>
            <input type="text" name="release_year" />

            <label htmlFor="cover_url">Cover URL</label>
            <input type="text" name="cover_url" />

            <label htmlFor="total_pages">Total Pages</label>
            <input type="text" name="total_pages" />

            <input type="submit" value="Add book" />
        </form>
    );

}

export default Form;
