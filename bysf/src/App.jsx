
import "./index.css";

import  Navbar  from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner'
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Products/>
    </div>
  );
}

export default App;
