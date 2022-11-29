import { listOfBaseTypes } from "./basesAndToppingsConfig";

export const pizzaPriceSummary = (pizzaBaseType, pizzaToppings) => {

  const pizzaToppingsPrice = Object.keys(pizzaToppings)
    .filter((key) => pizzaToppings[key].amount > 0)
    .map((key) => {
      return pizzaToppings[key].amount * pizzaToppings[key].pencePerServing;
    });

  const toppingsPrice = pizzaToppingsPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const pizzaBasePrice = listOfBaseTypes[pizzaBaseType].pencePerServing

  const pizzaPrice = ((pizzaBasePrice + toppingsPrice)/100);

  return pizzaPrice;
};
