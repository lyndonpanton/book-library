import { useState, useEffect } from 'react';

function Library() {
    const [books, setBooks] = useState([]);

    return (
        <section id="book-library">
            <h2>Your Books</h2>
            
            <article id="books">
                {
                    books.map(function (book, index) {

                    })
                }
            </article>
        </section>
    );
}

export default Library;
