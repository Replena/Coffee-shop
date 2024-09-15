import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function CoffeeCard({ product }) {
  return (
    <Card className="product-card">
      <CardImg src={product.image} />
      <div className="nameAndPrice">
        <CardTitle className="mp">{product.name}</CardTitle>
        <CardText>{product.price}</CardText>
      </div>
      <CardBody className="ratingAndVotes">
        <CardText className="mp">{product.rating}</CardText>
        <CardText className="">{product.votes}</CardText>
      </CardBody>
    </Card>
  );
}
export default CoffeeCard;
