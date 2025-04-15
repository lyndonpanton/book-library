import "./Form.css"

import axios from "axios";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Form({ setBooks }) {
    const [newISBN, setNewISBN] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    // const [newCoverURL, setNewCoverURL] = useState("");
    // const [newTotalPages, setNewTotalPages] = useState("");
    const [currentRestriction, setCurrentRestriction] = useState("");

    useEffect(() => {
        // axios.get("http://localhost:3001/api/select").then(function (response) {
        //     console.log(response.data);
        //     setBooks(response.data);
        // });

        setCurrentRestriction("isbn");
    }, [setBooks]);

    function submitNewBook(e) {
        e.preventDefault();

        // Check which restriction is currently being used

        switch (currentRestriction) {
            // Strip whitespace from back and end of input
            case "isbn":
                if (!isNaN(newISBN) && newISBN.length === 13) {
                    axios.get("https://openlibrary.org/search.json?isbn=" + newISBN).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else if (response.data.docs.length === 1) {
                            // One result
                            console.log(response.data.docs[0]);
                        } else {
                            // Multiple results
                        }
                    });
                }

                break;
            case "title":
                if (newTitle.length > 0) {
                    axios.get("https://openlibrary.org/search.json?title=" + newTitle).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else if (response.data.docs.length === 1) {
                            // One result
                            console.log(response.data.docs[0].author_name[0]);
                        } else {
                            // Multiple results
                            console.log(response.data.docs[0].author_name[0]);
                        }
                    });
                }

                break;
            case "author":
                if (newAuthor.length > 2) {
                    axios.get("https://openlibrary.org/search.json?author=" + newAuthor).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else if (response.data.docs.length === 1) {
                            // One result
                            console.log(response.data.docs[0].title);
                        } else {
                            // Multiple results
                            console.log(response.data.docs[0].title);
                        }
                    });
                }

                break;
            default:
                console.log("Invalid restriction used");
                break;
        }
        
        // If successful
        // setNewISBN("");
        // setNewTitle("");
        // setNewAuthor("");
        // setNewReleaseYear("");
    }

    function updateCurrentRestriction(e) {
        switch (e.target.value) {
            case "isbn":
                setCurrentRestriction("isbn");
                break;
            case "title":
                setCurrentRestriction("title");
                break;
            case "author":
                setCurrentRestriction("author");
                break;
            default:
                console.log("Invalid restriction used");
                break;
        }
    }

    function updateCurrentState(e) {
        switch (currentRestriction) {
            case "isbn":
                setNewISBN(e.target.value);
                break;
            case "title":
                setNewTitle(e.target.value);
                break;
            case "author":
                setNewAuthor(e.target.value);
                break;
            default:
                console.log("State not found");
                break;
        }
    }

    return (
        <section id="form">
            <h2>Find Books</h2>

            <form id="book-form" onSubmit={ (e) => submitNewBook(e) }>
                {/* Type and placeholder depends on option choosen */}
                <fieldset>
                    <input id="book-form-search" type="text" placeholder="Search books" onChange={ (e) => updateCurrentState(e) }/>
                    <FontAwesomeIcon id="book-form-search-icon" icon={ faSearch } />

                    <select id="book-form-restriction" onChange={ (e) => updateCurrentRestriction(e) }>
                        <option value="isbn">ISBN</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </select>
                </fieldset>

                <input type="submit" value="Search for Book" />

                {
                    /* Users should be able to search for a book, see all options if
                    there is one or more results, and then add the book they want
                    to their library */
                }
            </form>

            <section id="search-results">
                {/* Render x results in this section */}
            </section>
        </section>
    );
}

export default Form;
