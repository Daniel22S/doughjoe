import { Link, useParams } from "react-router-dom";

import { Card } from "react-bootstrap";

import "./ViewOrder.css";
import { listOfBaseTypes } from "./basesAndToppingsConfig";

const ViewOrder = ({ orders }) => {
  const { orderId } = useParams();
  const results = orders.filter(
    (individualOrder) => individualOrder.id === orderId
  );

  if (!results || results.length === 0) {
    return <p>no orders available</p>;
  }
  const order = results[0];

  return (
    <Card className="viewCard" key={order.id}>
      <Card.Header className="boldText">Order {order.id + 1}</Card.Header>
      <Card.Body>
        <Card.Text>Date: {order.time}</Card.Text>
        <Card.Text>Pizzas: </Card.Text>
        {order.basket.map((pizza) => (
          <Link
            className="nav-link"
            key={pizza.id}
            to={`/vieworder/${orderId}/${pizza.id}`}
          >
            <div className="pizzaLink">
              <p>{`${listOfBaseTypes[pizza.baseType].id} Pizza`}</p>
              <div className="pizzaBox"></div>
            </div>
          </Link>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ViewOrder;
