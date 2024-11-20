import "./App.css";
import Info from "./components/Info/Info";
import Buttons from "./components/Buttons/Buttons";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    return (
        <div className="container">
            <div className="content">
                <Info />
                <Buttons />
                <About />
                <Footer />
            </div>
            <SpeedInsights />
        </div>
    );
}

export default App;
