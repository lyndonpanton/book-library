import { useState, useEffect } from 'react';

function Library() {
    const [books, setBooks] = useState([]);

    return (
        <section id="library">
        {
            books.map(function (book, index) {

            })
        }
        </section>
    );
}

export default Library;
