import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PizzaToppingsSummary from "./PizzaToppingsSummary";
import { listOfBaseTypes } from "./basesAndToppingsConfig";
import { pizzaPriceSummary } from "./pizzaPriceSummary";

const Basket = ({ basket, changeBasket, changePizzaToEdit }) => {
  const navigate = useNavigate();
  const onEditClickHandler = (pizza, event) => {
    event.preventDefault();
    const pizzaToEdit = pizza;
    changePizzaToEdit(pizzaToEdit);
    navigate(`/createpizza`);
  };

  const onRemoveClickHandler = (id, event) => {
    event.preventDefault();
    const newBasket = basket.filter((pizza) => pizza.id !== id)
    changeBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  const basketPriceSummary = (basket) => {

    const basketPriceTotalArray = basket.map((pizza) => pizzaPriceSummary(pizza.baseType, pizza.toppings));
  
    const basketPriceTotal = basketPriceTotalArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  
    return basketPriceTotal;
  };

  return (
    <Container>
      {basket.map((pizza) => (
        <Card key={pizza.id}>
          <Card.Header>{pizza.id}</Card.Header>
          <Card.Body>
            <p>Pizza Base: {listOfBaseTypes[pizza.baseType].id}</p>
            <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
          </Card.Body>
          <Card.Footer>
            <p>
              £{pizzaPriceSummary(pizza.baseType, pizza.toppings).toFixed(2)}
            </p>
            <Button onClick={(event) => onEditClickHandler(pizza, event)}>Edit Pizza</Button>
            <Button onClick={(event) => onRemoveClickHandler(pizza.id, event)}>Remove Pizza</Button>
          </Card.Footer>
        </Card>))}
        <Card>
          <Card.Footer>
            <p>Basket Total: £{basketPriceSummary(basket).toFixed(2)}</p>
          </Card.Footer>
        </Card>
    </Container>
  );
};

export default Basket;
