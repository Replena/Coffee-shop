import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <Button onClick={() => navigate("/")}>All Products</Button>
      <Button onClick={() => navigate("/filtered")}>Available Now</Button>
    </>
  );
}

export default Header;
