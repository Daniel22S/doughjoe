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
      .get("https://calorieninjas.p.rapidapi.com/v1/nutrition", {
        params: {
          query: getToppingsParams(),
        },
        headers: {
          "X-RapidAPI-Key":
            "9427281b45msh84e9ee865d49b95p1c8e41jsn05aab4ed6acc",
          "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
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
