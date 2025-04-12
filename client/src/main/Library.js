function Library({ books }) {

    return (
        <section id="book-library">
            <h2>Your Books</h2>
            
            <article id="books">

                {
                    books.map(function (book, index) {
                        return (
                            <div key={index}>
                                <h3>{ book.title }</h3>
                                <img src={ book.cover_url } alt="Book cover" />
                                <p>{ book.author }</p>
                                <p>{ book.isbn }</p>
                                <p>{ book.release_year }</p>
                                <p>{ book.total_pages }</p>
                            </div>
                        );
                    })
                }
            </article>
        </section>
    );
}

export default Library;
