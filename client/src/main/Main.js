import "./Main.css";

import Form from "./Form";
import Library from "./Library";

import { useState } from "react";

function Main() {
    const [books, setBooks] = useState([]);

    return (
        <main>
            <Form setBooks={ setBooks }/>
            <Library books={ books }/>
        </main>
    );
}

export default Main;
