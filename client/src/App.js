import './App.css';
import Header from './Header';
import { useState, useEffect } from 'react'

function App() {
    // New book: isbn, title, author, release_year, cover_url, total_pages
    const [newISBN, getNewISBN] = useState(0);
    const [newTitle, getNewTitle] = useState("");
    const [newAuthor, getNewAuthor] = useState("");
    const [newReleaseYear, getNewReleaseYear] = useState(0);
    const [newCoverURL, getNewCoverURL] = useState("");
    const [newTotalPages, getNewTotalPages] = useState(0);

    const [books, setBooks] = useState([]);

    function submitNewBook(e) {
        e.preventDefault();
    }

    // Update state variables
    return (
        <div className="App">
            <Header />
            <main>
                <form id="book-form" onSubmit={ submitNewBook }>
                    <label></label>
                    <input type="text "></input>
                </form>
                <section id="library">
                {
                    books.map(function (book, index) {

                    })
                }
                </section>
            </main>
            <footer>
                
            </footer>
        </div>
  );
}

export default App;
