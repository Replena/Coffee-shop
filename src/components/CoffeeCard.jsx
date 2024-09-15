import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function CoffeeCard({ product }) {
  return (
    <Card className="product-card">
      <CardImg src={product.image} />
      <CardTitle>{product.name}</CardTitle>
      <CardText>{product.price}</CardText>
      <CardBody>
        <CardText>{product.rating}</CardText>
        <CardText>{product.votes}</CardText>
      </CardBody>
    </Card>
  );
}
export default CoffeeCard;
