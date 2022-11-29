// import { Container } from "react-bootstrap";

import pizzaBaseRegular from "./img/pizza_regular-base.png";
import pizzaBaseStuffed from "./img/pizza_stuffed-crust.png";
import pizzaBaseThin from "./img/pizza_thin-crust.png";
import pizzaBaseDeep from "./img/pizza_deep-pan.png";

import pizzaTomato from "./img/pizza_tom1.png";
import pizzaTomatoTwo from "./img/pizza_tom2.png";
import pizzaHam from "./img/pizza_ham1.png";
import pizzaHamTwo from "./img/pizza_ham2.png";
import pizzaPineapple from "./img/pizza_pin1.png";
import pizzaPineappleTwo from "./img/pizza_pin2.png";
import pizzaCheese from "./img/pizza_cheese.png";
import pizzaMushroom from "./img/pizza_mush1.png";
import pizzaMushroomTwo from "./img/pizza_mush2.png";
import "./PizzaViewerComponent.css";

const PizzaViewerComponent = ({pizza}) => {

  const isWhatBase = pizza.baseType;

  const viewBase = () => {
    switch (isWhatBase) {
      case "stuffedcrust":
        return <img className="pizzaBaseViewer" src={pizzaBaseStuffed} width="300px" />;
      case "thincrust":
        return <img className="pizzaBaseViewer" src={pizzaBaseThin} width="300px" />;
      case "deeppan":
        return <img className="pizzaBaseViewer" src={pizzaBaseDeep} width="300px" />;
      default:
        return <img className="pizzaBaseViewer" src={pizzaBaseRegular} width="300px" />;
    }
  };

  const isTomato = pizza.toppings.tomato.amount;

  const viewTomato = () => {
    switch (isTomato) {
      case 1:
        return <img className="pizzaCheese" src={pizzaTomato} width="300px" />;
      case 2:
        return <img className="pizzaCheese" src={pizzaTomatoTwo} width="300px" />;
      default:
        break;
    }
  };

  const isHam = pizza.toppings.ham.amount;

  const viewHam = () => {
    switch (isHam) {
      case 1:
        return <img className="pizzaHam" src={pizzaHam} width="300px" />;
      case 2:
        return <img className="pizzaHam" src={pizzaHamTwo} width="300px" />;
      default:
        break;
    }
  };

  const isPineapple = pizza.toppings.pineapple.amount;

  const viewPineapple = () => {
    switch (isPineapple) {
      case 1:
        return (
          <img className="pizzaCheese" src={pizzaPineapple} width="300px" />
        );
      case 2:
        return (
          <img className="pizzaCheese" src={pizzaPineappleTwo} width="300px" />
        );
      default:
        break;
    }
  };

  const isCheese = pizza.toppings.cheese.amount;

  const viewCheese = () => {
    switch (isCheese) {
      case 1:
        return <img className="pizzaCheese" src={pizzaCheese} width="300px" />;
      case 2:
        return <img className="pizzaCheese" src={pizzaCheese} width="300px" />;
      default:
        break;
    }
  };

  const isMushroom = pizza.toppings.mushroom.amount;

  const viewMushroom = () => {
    switch (isMushroom) {
      case 1:
        return (
          <img className="pizzaMushroom" src={pizzaMushroom} width="300px" />
        );
      case 2:
        return (
          <img className="pizzaMushroom" src={pizzaMushroomTwo} width="300px" />
        );
      default:
        break;
    }
  };

  const constructPizzaView = () => {
    return (
      <div className="pizzaViewer">
        {viewBase()}
        {viewCheese()}
        {viewPineapple()}
        {viewTomato()}
        {viewHam()}
        {viewMushroom()}
      </div>
    );
  };

  return <div>{constructPizzaView()}</div>;
};

export default PizzaViewerComponent;
