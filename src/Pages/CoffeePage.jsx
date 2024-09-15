import CoffeeCards from "../components/CoffeeCards.jsx";

function CoffeePage({ products }) {
  return (
    <div>
      <CoffeeCards products={products} />
    </div>
  );
}

export default CoffeePage;
