import { Card, Button } from "react-bootstrap";

const ToppingsList = ({ toppings, increaseTopping, decreaseTopping }) => {
  return Object.keys(toppings).map((toppingKey) => (
    <Card className="toppingCard" key={toppingKey}>
      <Card.Body className="toppingCardBody">
        <Card.Title>{toppings[toppingKey].id} ({toppings[toppingKey].pencePerServing}p)</Card.Title>
        <Card.Text className="toppingCardText">
          <Button
            variant="flat"
            onClick={() => decreaseTopping(toppings[toppingKey].id)}
          >
            <span className="toppingAmount">-</span>
          </Button>
          <Card.Text><span className="toppingAmount">{toppings[toppingKey].amount}</span></Card.Text>
          <Button
            variant="flat"
            onClick={() => increaseTopping(toppings[toppingKey].id)}
          >
            <span className="toppingAmount">+</span>
        
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

export default ToppingsList;
