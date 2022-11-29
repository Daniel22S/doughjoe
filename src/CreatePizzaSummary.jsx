import { Card } from "react-bootstrap";

import PizzaToppingsSummary from "./PizzaToppingsSummary";
import { pizzaPriceSummary } from "./pizzaPriceSummary";
import { listOfBaseTypes } from "./basesAndToppingsConfig";
import AxiosNutrition from "./AxiosNutrition";
import PizzaViewerComponent from "./PizzaViewerComponent";

import "./CreatePizzaSummary.css";

const CreatePizzaSummary = ({ pizza }) => (
  <Card key={pizza.id}>
    <Card.Header>Order Summary</Card.Header>
    <Card.Body>
      <div className="pizzaSummaryCardBody">
        <div>
          <p>Pizza Base: {listOfBaseTypes[pizza.baseType].id}</p>
          <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
          <p>£{pizzaPriceSummary(pizza.baseType, pizza.toppings).toFixed(2)}</p>
        </div>
        <PizzaViewerComponent pizza={pizza} />
      </div>
    </Card.Body>
    <AxiosNutrition pizza={pizza} />
  </Card>
);

export default CreatePizzaSummary;
