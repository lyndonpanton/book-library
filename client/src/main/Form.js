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
            
        </form>
    );

}

export default Form;
