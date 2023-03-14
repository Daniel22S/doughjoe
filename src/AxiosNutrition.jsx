import { useEffect, useState } from "react";
import axios from "axios";

import { Spinner, Table } from "react-bootstrap";

import { listOfBaseTypes, listOfToppings } from "./basesAndToppingsConfig";
import { getTotalNutritionalValue } from "./nutritionalValue";
import "./AxiosNutrition.css";


const AxiosNutrition = ({ pizza }) => {
  const [apiData, changeApiData] = useState();
  const [fetching, changeFetching] = useState(false);

  const getToppingsParams = () => {
    const toppings = Object.keys(pizza.toppings)
      .map((key) => ({ ...pizza.toppings[key], key }))
      .reduce((previous, current) => {
        if (current.amount === 0) {
          return previous;
        }
        return [
          ...previous,
          `${current.amount * listOfToppings[current.key].gramsPerServing}g ${
            current.id
          }`,
        ];
      }, []);

    return [
      ...toppings,
      `${listOfBaseTypes[pizza.baseType].gramsPerServing}g Pizza dough`,
    ].join(", ");
  };

  useEffect(() => {
    changeFetching(true);
    axios
      .get("https://api.calorieninjas.com/v1/nutrition?query=" + getToppingsParams(), {
        headers: {
          "X-Api-Key":
            "jnN77X77WdMZgBmftes4UA==kMRoUy2dMYuIgY5O"
        },
      })
      .then(({ data }) => {
        changeApiData(data);
        changeFetching(false);
      });
  }, [pizza]);

  if (!apiData) {
    return <p>Loading ...</p>;
  }

  if (fetching) {
    return (
      <div className="nutInfo">
        <Spinner animation="border"/>
      </div>
    );
  }

  const totalNutritionalValue = getTotalNutritionalValue(apiData.items);

  return (
    <Table striped bordered hover>
      {Object.keys(totalNutritionalValue).map((key) => (
        <tr key={key}>
          <td>{key.replace("_", " ").replace("_", " ")}</td>
          <td>{Number(totalNutritionalValue[key]).toFixed(1)}</td>
        </tr>
      ))}
    </Table>
  );
};
export default AxiosNutrition;
