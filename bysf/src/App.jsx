import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
