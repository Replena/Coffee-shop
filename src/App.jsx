import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoffeePage from "./Pages/CoffeePage.jsx";
import axios from "axios";
import Header from "./components/Header.jsx";
function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CoffeePage products={products} />} />
        <Route
          path="/filtered"
          element={<CoffeePage products={filteredProducts} />}
        />
      </Routes>
    </>
  );
}

export default App;
