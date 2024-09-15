import CoffeeCards from "../components/CoffeeCards.jsx";

function CoffeePage({ products }) {
  return (
    <div className="coffee-cards">
      <CoffeeCards products={products} />
    </div>
  );
}

export default CoffeePage;
