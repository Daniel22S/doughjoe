import { useState } from "react";

import { Form, Container, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { v4 as uuidv4 } from "uuid";

import ToppingsList from "./ToppingsList";
import CreatePizzaSummary from "./CreatePizzaSummary";
import { useNavigate } from "react-router-dom";
import { listOfBaseTypes, listOfToppings } from "./basesAndToppingsConfig";

const CreatePizza = ({
  basket,
  changeBasket,
  pizzaToEdit,
  changePizzaToEdit,
}) => {
  const defaultPizza = {
    id: "",
    baseType: "regular",
    toppings: { ...listOfToppings },
  };

  const [formValues, changeFormValues] = useState(
    pizzaToEdit ? pizzaToEdit : defaultPizza
  );

  const increaseTopping = (id) => {
    const toppingsFormValues = { ...formValues.toppings };
    Object.keys(toppingsFormValues).forEach((key) => {
      if (
        id === toppingsFormValues[key].id &&
        toppingsFormValues[key].amount < 2
      ) {
        changeFormValues({
          ...formValues,
          toppings: {
            ...toppingsFormValues,
            [key]: {
              ...toppingsFormValues[key],
              amount: toppingsFormValues[key].amount + 1,
            },
          },
        });
      }
    });
  };

  const decreaseTopping = (id) => {
    const toppingsFormValues = { ...formValues.toppings };
    Object.keys(toppingsFormValues).forEach((key) => {
      if (
        id === toppingsFormValues[key].id &&
        toppingsFormValues[key].amount > 0
      ) {
        changeFormValues({
          ...formValues,
          toppings: {
            ...toppingsFormValues,
            [key]: {
              ...toppingsFormValues[key],
              amount: toppingsFormValues[key].amount - 1,
            },
          },
        });
      }
    });
  };

  const handleBaseTypeChange = (event) => {
    const newBaseType = { ...formValues };
    newBaseType[event.target.name] = event.target.value;
    changeFormValues(newBaseType);
  };

  const navigate = useNavigate();

  const addToBasket = (event, formValues) => {
    event.preventDefault();
    if (pizzaToEdit) {
      const updatedBasket = basket.map((pizza) => {
        if (pizza.id === pizzaToEdit.id) {
          const target = pizza;
          const source = formValues;
          const updatedPizza = Object.assign(target, source);
          return updatedPizza;
        } else {
          return pizza;
        }
      });
      changeBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));

      changePizzaToEdit();
      changeFormValues({ ...defaultPizza });
      toastr["success"]("Pizza Updated!");
      navigate(`/basket`);
    } else {
      changeBasket([...basket, { ...formValues, id: uuidv4() }]);
      localStorage.setItem("basket", JSON.stringify([...basket, formValues]));
      changeFormValues({ ...defaultPizza });
      toastr["success"]("Pizza Added to Basket!");
      navigate(`/`);
    }
  };

  const calculateBaseCost = (base) => {
    const basePence = listOfBaseTypes[base].pencePerServing;
    const basePrice = basePence / 100;

    return basePrice;
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label className = "whiteText">Pizza Base</Form.Label>
          <Form.Select
            name="baseType"
            value={formValues.baseType}
            onChange={(event) => handleBaseTypeChange(event)}
          >
            <option value="regular">
              Regular (£{calculateBaseCost("regular").toFixed(2)})
            </option>
            <option value="thincrust">
              Thin Crust (£{calculateBaseCost("thincrust").toFixed(2)})
            </option>
            <option value="deeppan">
              Deep Pan (£{calculateBaseCost("deeppan").toFixed(2)})
            </option>
            <option value="stuffedcrust">
              Stuffed Crust (£{calculateBaseCost("stuffedcrust").toFixed(2)})
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className = "whiteText">Pizza Toppings</Form.Label>
          <ToppingsList
            toppings={formValues.toppings}
            decreaseTopping={decreaseTopping}
            increaseTopping={increaseTopping}
          />
        </Form.Group>
        <CreatePizzaSummary pizza={formValues} />
        <Button
          type="submit"
          onClick={(event) => addToBasket(event, formValues)}
        >
          {pizzaToEdit ? "Update Pizza" : "Add Pizza"}
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePizza;
