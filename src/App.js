import "./App.css";
import Info from "./components/Info/Info";
import Buttons from "./components/Buttons/Buttons";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="container">
            <div className="content">
                <Info />
                <Buttons />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    );
}

export default App;
