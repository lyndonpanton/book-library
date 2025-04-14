import "./Form.css"
import axios from "axios";

import { useState, useEffect } from 'react';

function Form({ setBooks }) {
    // New book: isbn, title, author, release_year, cover_url, total_pages
    const [newISBN, setNewISBN] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newReleaseYear, setNewReleaseYear] = useState("");
    const [newCoverURL, setNewCoverURL] = useState("");
    const [newTotalPages, setNewTotalPages] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/api/select").then(function (response) {
            console.log(response.data);
            setBooks(response.data);
        });
    }, [setBooks]);

    function submitNewBook(e) {
        e.preventDefault();

        // Strip whitespace from back and end each input

        let validISBN = false;
        let validTitle = false;
        let validAuthor = false;
        let validReleaseYear = false;
        let validCoverURL = false;
        let validTotalPages = false;

        // Validation (see database schema, isEmpty and isFormattedCorrectly)...
        if (newISBN.length === 13) {
            validISBN = true;
        }

        if (newTitle.length > 0) {
            validTitle = true;
        }

        if (newAuthor.length > 2) {
            validAuthor = true;
        }

        if (newReleaseYear.length === 4 && !isNaN(newReleaseYear)) {
            validReleaseYear = true;
        }

        // Valid URL as well as length...
        if (newCoverURL.length > 0) {
            // Make a request to the open library API and see if a valid
            // response if returned
            validCoverURL = true;
        }

        if (!isNaN(newTotalPages) && parseInt(newTotalPages) > 4) {
            validTotalPages = true;
        }
        
        // Highlight fields with the incorrect format on submission

        // Database SQL Injection validation?

        if (
                validISBN && validTitle && validAuthor && validReleaseYear
                && validTotalPages
        ) {
            if (!validCoverURL) {
                setNewCoverURL("https://unsplash.com/photos/a-blue-book-with-gold-speckles-on-it-iB9YTvq2rZ8");
            }

            axios.post("http://localhost:3001/api/insert", {
                    isbn: newISBN,
                    title: newTitle,
                    author: newAuthor,
                    releaseYear: newReleaseYear,
                    coverURL: newCoverURL,
                    totalPages: newTotalPages
            });

            // Update UI

            // Reset Form and State
            setNewISBN("");
            setNewTitle("");
            setNewAuthor("");
            setNewReleaseYear("");
            setNewCoverURL("");
            setNewTotalPages("");
        } else {
            if (!validISBN) {
                console.log("ISBN must a 13 digits number");
            }

            if (!validTitle) {
                console.log("Title must contain at least 1 character");
            }

            if (!validAuthor) {
                console.log("Author name must be at least 3 characters long");
            }

            if (!validReleaseYear) {
                console.log("Release year must be a 4-digit number");
            }

            if (!validCoverURL) {
                console.log("Invalid book cover URL");
            }

            if (!validTotalPages) {
                console.log("Book must contain at least 5 pages");
            }
        }
    }

    return (
        <form id="book-form" onSubmit={ (e) => submitNewBook(e) }>
            {/* Search by: ISBN, */}
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

            {/* Type and placeholder depends on option choosen */}
            <input type="text" placeholder="..." />

            <select>
                <option>ISBN</option>
                <option>Title</option>
                <option>Author</option>
                <option>Release Year</option>
            </select>

            <input type="submit" value="Add book" />
        </form>
    );
}

export default Form;
