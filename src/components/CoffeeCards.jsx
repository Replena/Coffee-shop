import CoffeeCard from "./CoffeeCard.jsx";
import "../../Coffee-shop/src/index.css";
function CoffeeCards({ products }) {
  return (
    <div className="coffee-page">
      {products.map((product) => (
        <CoffeeCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CoffeeCards;
