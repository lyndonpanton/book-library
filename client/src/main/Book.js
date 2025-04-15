function Book({ title, author, releaseYear }) {
    return (
        <article className="book">
            <p>{ title }</p>
            <p>{ author }</p>
            {
                // Use an array of 10+ template book covers and give books a
                // random cover
            }
            {/* <img src="..." /> */}
            {/* <p>ISB</p> */}
            <p>{ releaseYear }</p>
        </article>
    );
}

export default Book;
