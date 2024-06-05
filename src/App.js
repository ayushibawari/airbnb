import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rental from "./components/Rental";
import Footer from "./components/Footer";
function App() {
    return ( < div className = "" >
        <Navbar/>
        <div className="">
        <Filters/>
        <Rental/>
        </div>
        <Footer/>
        </div>
    );
}

export default App;