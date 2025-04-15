import "./Form.css"
import Book from "./Book";

import axios from "axios";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Form({ setBooks }) {
    // const [newISBN, setNewISBN] = useState("");
    // const [newTitle, setNewTitle] = useState("");
    // const [newAuthor, setNewAuthor] = useState("");
    const [searchValue, setSearchValue] = useState("");
    // const [newCoverURL, setNewCoverURL] = useState("");
    // const [newTotalPages, setNewTotalPages] = useState("");
    const [currentRestriction, setCurrentRestriction] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:3001/api/select").then(function (response) {
        //     console.log(response.data);
        //     setBooks(response.data);
        // });

        setCurrentRestriction("isbn");
    }, [setBooks]);

    function updateSearchBooks(results, limit) {
        limit = 100;
        let newSearchBooks = [];

        if (results.length < limit) limit = results.length;

        if (results.length > 0) {

            for (let i = 0; i < limit; i++) {
                newSearchBooks = [...newSearchBooks, {
                    title: results[i].title,
                    author: results[i].author,
                    releaseYear: results[i].first_publish_year
                }];
            }
        } else {
            // No books found...
        }

        setSearchBooks(newSearchBooks);
    }

    function displaySearchResults(e) {
        e.preventDefault();

        // Check which restriction is currently being used

        console.log(searchValue);
        switch (currentRestriction) {
            // Strip whitespace from back and end of input

            case "isbn":
                if (!isNaN(searchValue) && searchValue.length === 13) {
                    axios.get("https://openlibrary.org/search.json?isbn=" + searchValue).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else {
                            updateSearchBooks(response.data.docs, 10);
                        }
                    });
                }

                break;
            case "title":
                if (searchValue.length > 0) {
                    axios.get("https://openlibrary.org/search.json?title=" + searchValue).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else {
                            updateSearchBooks(response.data.docs, 10);
                        }
                    });
                }

                break;
            case "author":
                if (searchValue.length > 2) {
                    axios.get("https://openlibrary.org/search.json?author=" + searchValue).then(function (response) {
                        if (response.data.docs.length === 0) {
                            // No results
                        } else {
                            updateSearchBooks(response.data.docs, 10);
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
        setSearchValue("");
        document.getElementById("book-form-search").value = "";
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

    // function updateCurrentState(e) {
    //     switch (currentRestriction) {
    //         case "isbn":
    //             setNewISBN(e.target.value);
    //             break;
    //         case "title":
    //             setNewTitle(e.target.value);
    //             break;
    //         case "author":
    //             setNewAuthor(e.target.value);
    //             break;
    //         default:
    //             console.log("State not found");
    //             break;
    //     }
    // }

    return (
        <section id="form">
            <h2>Find Books</h2>

            <form id="book-form" onSubmit={ (e) => displaySearchResults(e) }>
                {/* Type and placeholder depends on option choosen */}
                <fieldset>
                    {/* <input id="book-form-search" type="text" placeholder="Search books" onChange={ (e) => updateCurrentState(e) }/> */}
                    <input id="book-form-search" type="text" placeholder="Search books" onChange={ (e) => setSearchValue(e.target.value) } />
                    <FontAwesomeIcon id="book-form-search-icon" icon={ faSearch } />

                    <select id="book-form-restriction" onChange={ (e) => updateCurrentRestriction(e) }>
                        <option value="isbn">ISBN</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </select>
                </fieldset>

                <input type="submit" value="Search for Book" />
            </form>

            <section id="search-results">
                {
                    searchBooks.map(function (book, index) {
                        return (
                            <Book
                                key={ index }
                                title={ book.title }
                                author={ book.author }
                                releaseYear={ book.releaseYear } />
                        );
                    })
                }

                {
                    /* Users should be able to search for a book, see all options if
                    there is one or more results, and then add the book they want
                    to their library */
                }
            </section>
        </section>
    );
}

export default Form;
