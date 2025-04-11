import "./Form.css"

import { useState } from 'react';

function Form() {
    // New book: isbn, title, author, release_year, cover_url, total_pages
    const [newISBN, setNewISBN] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newReleaseYear, setNewReleaseYear] = useState("");
    const [newCoverURL, setNewCoverURL] = useState("");
    const [newTotalPages, setNewTotalPages] = useState("");

    function submitNewBook(e) {
        e.preventDefault();

        // Error handling (see database schema, isEmpty and isFormattedCorrectly)...

        // axios.post("http://localhost:3001/api/insert", {
        //     isbn: newISBN,
        //     title: newTitle,
        //     author: newAuthor,
        //     release_year: newReleaseYear,
        //     coverURL: newCoverURL,
        //     totalPages: newTotalPages
        // });

        // Update UI

        // Reset Form and State
        setNewISBN("");
        setNewTitle("");
        setNewAuthor("");
        setNewReleaseYear("");
        setNewCoverURL("");
        setNewTotalPages("");
        
    }

    return (
        <form id="book-form" onSubmit={ (e) => submitNewBook(e) }>
            <label htmlFor="form-isbn">ISBN</label>
            <input type="text"
                    name="form-isbn"
                    id="form-isbn"
                    value={ newISBN }
                    onChange={ (e) => setNewISBN(e.target.value) } />

            <label htmlFor="form-title">Title</label>
            <input type="text"
                    name="form-title"
                    id="form-title"
                    value={ newTitle }
                    onChange={ (e) => setNewTitle(e.target.value) } />

            <label htmlFor="form-author">Author</label>
            <input type="text"
                    name="form-author"
                    id="form-author"
                    value={ newAuthor }
                    onChange={ (e) => setNewAuthor(e.target.value) } />

            <label htmlFor="form-release-year">Release Year</label>
            <input type="text"
                    name="form-release-year"
                    id="form-release-year"
                    value={ newReleaseYear }
                    onChange={ (e) => setNewReleaseYear(e.target.value) } />

            <label htmlFor="form-cover-url">Cover URL</label>
            <input type="text"
                    name="form-cover-url"
                    id="form-cover-url"
                    value={ newCoverURL }
                    onChange={ (e) => setNewCoverURL(e.target.value) } />

            <label htmlFor="form-total-pages">Total Pages</label>
            <input type="text"
                    name="form-total-pages"
                    id="form-total-pages"
                    value={ newTotalPages }
                    onChange={ (e) => setNewTotalPages(e.target.value) } />

            <input type="submit" value="Add book" />
        </form>
    );
}

export default Form;
