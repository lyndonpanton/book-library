import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { useState, useEffect } from 'react'

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <main>
            </main>
            <Footer />
        </div>
  );
}

export default App;
