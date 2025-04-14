import "./Form.css"
import axios from "axios";

import { useState, useEffect } from 'react';

function Form({ setBooks }) {
    const [newISBN, setNewISBN] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newReleaseYear, setNewReleaseYear] = useState("");
    // const [newCoverURL, setNewCoverURL] = useState("");
    // const [newTotalPages, setNewTotalPages] = useState("");
    const [currentRestriction, setCurrentRestrction] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/api/select").then(function (response) {
            console.log(response.data);
            setBooks(response.data);
        });

        setCurrentRestrction("isbn");
    }, [setBooks]);

    function submitNewBook(e) {
        e.preventDefault();

        // Check which restriction is currently being used

        switch (currentRestriction) {
            // Strip whitespace from back and end of input
            case "isbn":
                if (!isNaN(newISBN) && newISBN.length == 13) {
                    
                }
                break;
            case "title":
                break;
            case "author":
                break;
            case "release-year":
                break;
        }
        
        // Confirm if the form of the relevant input field is valid
    }

    function updateCurrentRestriction(e) {
        switch (e.target.value) {
            case "isbn":
                setCurrentRestrction("isbn");
                break;
            case "title":
                setCurrentRestrction("title");
                break;
            case "author":
                setCurrentRestrction("author");
                break;
            case "release-year":
                setCurrentRestrction("release-year");
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
            case "release-year":
                setNewReleaseYear(e.target.value);
                break;
        }
    }

    return (
        <form id="book-form" onSubmit={ (e) => submitNewBook(e) }>
            {/* Type and placeholder depends on option choosen */}
            <input type="text" placeholder="..." onChange={ (e) => updateCurrentState(e) }/>

            <select onChange={ (e) => updateCurrentRestriction(e) }>
                <option value="isbn">ISBN</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="release-year">Release Year</option>
            </select>

            <input type="submit" value="Search for Book" />

            {
                /* Users should be able to search for a book, see all options if
                there is one or more results, and then add the book they want
                to their library */
            }
        </form>
    );
}

export default Form;
