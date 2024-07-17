import "./App.css";
import Info from "./components/Info/Info";
import Buttons from "./components/Buttons/Buttons";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="container">
            <div className="content">
                <Info />
                <Buttons />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default App;
