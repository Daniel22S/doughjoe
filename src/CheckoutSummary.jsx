import { Container, Card } from 'react-bootstrap';

import './Checkout.css';
import { listOfBaseTypes } from './basesAndToppingsConfig';

const CheckoutSummary = ({ basket }) => {

  const buildSummary = () => basket.map(({ id, toppings, baseType }) => (
    <Card key={id}>
      <Card.Body>
        <Card.Text>Base: {listOfBaseTypes[baseType].id}</Card.Text>
        {Object.keys(toppings)
          .filter((key) => toppings[key].amount > 0)
          .map((topping, index) => (
            <Card.Text key={index + id}>
              Topping: {toppings[topping].amount}× {toppings[topping].id}
            </Card.Text>
          ))}
      </Card.Body>
    </Card>
  ));

  return (
    <Container className="checkoutContainer">
      <Container className="checkoutSummary">
        {buildSummary()}
      </Container>
    </Container>
  );
}

export default CheckoutSummary;