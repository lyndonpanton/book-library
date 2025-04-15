function Book({ isbn, title, author, releaseYear }) {
    return (
        <article className="book">
            <p>Title</p>
            <p>Author</p>
            {
                // Use an array of 10+ book covers and give books a random cover
            }
            {/* <img src="..." /> */}
            <p>ISB</p>
            <p>Release Year</p>
        </article>
    );
}

export default Book;
