import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

// let faKitToken = process.env.FONTAWESOME_PACKAGE_TOKEN;

function App() {
    return (
        <div className="App">
            {/* { console.log("Token: " + faKitToken) } */}
            <script
                    src={"https://https://kit.fontawesome.com/" + faKitToken + ".js"}
                    crossOrigin="anonymous">
            </script>
            <Header />
            <Main />
            <Footer />
        </div>
  );
}

export default App;
