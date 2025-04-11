import "./Form.css"

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
            <label htmlFor="form-isbn">ISBN</label>
            <input type="text" name="form-isbn" id="form-isbn" />

            <label htmlFor="form-title">Title</label>
            <input type="text" name="form-title" id="form-title" />

            <label htmlFor="form-author">Author</label>
            <input type="text" name="form-author" id="form-author" />

            <label htmlFor="form-release-year">Release Year</label>
            <input type="text" name="form-release-year" id="form-release-year" />

            <label htmlFor="form-cover-url">Cover URL</label>
            <input type="text" name="form-cover-url" id="form-cover-url" />

            <label htmlFor="form-total-pages">Total Pages</label>
            <input type="text" name="form-total-pages" id="form-total-pages" />

            <input type="submit" value="Add book" />
        </form>
    );

}

export default Form;
