import "./Library.css";

function Library({ books }) {

    return (
        <section id="book-library">
            <h2>Your Books</h2>
            
            <article id="books">

                {
                    books.map(function (book, index) {
                        return (
                            <div key={index} className="book">
                                <h3 className="book-title">{ book.title }</h3>
                                {/* Give covers a specific size */}
                                <p className="book-author">{ book.author }</p>
                                <img className="book-cover" src={ book.cover_url } alt="Book cover" />
                                <p className="book-isbn">ISBN: { book.isbn }</p>
                                <p className="book-release-year">Release Year: { book.release_year }</p>
                                <p className="book-total-pages">Pages: { book.total_pages }</p>
                            </div>
                        );
                    })
                }
            </article>
        </section>
    );
}

export default Library;

/*
    - Boneshaker
    - The Wind in the Willows
    - The Wonderful Wizard of Oz
    - Alice's Adventures in Wonderland
    - Treasure Island
    - Winnie-the-Pooh
    - Heidi
    - The Tale of Peter Rabbit
*/
