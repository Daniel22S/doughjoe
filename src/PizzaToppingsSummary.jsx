const PizzaToppingsSummary = ({ pizzaToppings }) => (
  <>
    {Object.keys(pizzaToppings)
      .filter((key) => pizzaToppings[key].amount > 0)
      .map((key) => (
        <p key={key}>{`${pizzaToppings[key].amount}× ${pizzaToppings[key].id}`}</p>
      ))}
  </>
);

export default PizzaToppingsSummary;
