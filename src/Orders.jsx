import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

import "./Orders.css"

const Orders = ({ orders }) => {
  const navigate = useNavigate();

  const handleOrderClick = (order) => {
    navigate(`/vieworder/${order.id}`);
  };

  return (
    <>
      {orders.map((order) => (
        <Card key={order.id} className="orderCard">
          <Card.Header className="boldText">Order {order.id + 1}</Card.Header>
          <Card.Body>
            <Card.Text>Date: {order.time}</Card.Text>
            <Button onClick={() => handleOrderClick(order)}>View order</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Orders;
