import { useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import CheckoutSummary from './CheckoutSummary';
import checkoutFormValidation from './checkoutFormValidation';
import './Checkout.css';


const Checkout = ({ basket, changeBasket, orders, changeOrders }) => {

  const defaultValues = {
    id: 0,
    name: "",
    addressLineOne: "",
    city: "",
    postCode: "",
  }

  const errorsInitial = {
    name: false,
    addressLineOne: false,
    city: false,
    postCode: false,
  }

  const [checkoutFormValues, changeCheckoutFormValues] = useState(defaultValues)
  const [validated, changeValidated] = useState(false);
  const [errors, changeErrors] = useState(errorsInitial)

  const handleChange = (event) => {
    event.preventDefault();
    const newState = { ...checkoutFormValues };
    newState[event.target.name] = event.target.value;
    changeCheckoutFormValues(newState);
  }

  const validateForm = () => {
    let workingErrors = checkoutFormValidation(checkoutFormValues, basket);
    changeErrors(workingErrors)
    const formValidate = !(Object.keys(workingErrors).some((key) => workingErrors[key]))
    changeValidated(formValidate);
    return formValidate
  }

  const onSubmitFunction = () => {
    let currentTime = new Date().toLocaleString();

    const newOrder = {
      id: uuidv4(),
      name: checkoutFormValues.name,
      addressLineOne: checkoutFormValues.addressLineOne,
      city: checkoutFormValues.city,
      postCode: checkoutFormValues.postCode,
      time: currentTime,
      basket: [...basket],
    }

    const updatedOrders = [...orders, newOrder]
    const clearBasket = [];

    changeOrders(updatedOrders)
    changeBasket(clearBasket)
    localStorage.setItem("orders", JSON.stringify(updatedOrders))
    localStorage.setItem("basket", JSON.stringify(clearBasket))

    changeCheckoutFormValues({
      id: 0,
      name: "",
      addressLineOne: "",
      city: "",
      postCode: "",
      basket: [],
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    validateForm()
    if (validateForm()) {
      onSubmitFunction()
    }
  }

  return (
    <Container>
      <CheckoutSummary basket={basket} />
      {errors.basket && (
        <div>Your Basket Is Empty</div>
      )}
      <Form noValidate validated={validated} onSubmit={(event) => submitHandler(event)}>

        <Form.Group controlId="UserName">
          <Form.Label className = "whiteText">Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={checkoutFormValues.name}
            isInvalid={errors.name}
            onChange={(event) => handleChange(event)}
          />
          <Form.Control.Feedback type="invalid">{"Name must contain more than one character"}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="AddressLineOne">
          <Form.Label className = "whiteText">Address Line One</Form.Label>
          <Form.Control
            name="addressLineOne"
            type="text"
            value={checkoutFormValues.addressLineOne}
            isInvalid={errors.addressLineOne}
            onChange={(event) => handleChange(event)}
          />
          <Form.Control.Feedback type="invalid">{"Address line required"}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="City">
          <Form.Label className = "whiteText">City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            value={checkoutFormValues.city}
            isInvalid={errors.city}
            onChange={(event) => handleChange(event)}
          />
          <Form.Control.Feedback type="invalid">{"City cannot be a number"}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="PostCode">
          <Form.Label className = "whiteText">PostCode</Form.Label>
          <Form.Control
            name="postCode"
            type="text"
            value={checkoutFormValues.postCode}
            isInvalid={errors.postCode}
            onChange={(event) => handleChange(event)}
          />
          <Form.Control.Feedback type="invalid">{"Post Code is not valid"}</Form.Control.Feedback>
        </Form.Group>


        <Button type="submit">
          Complete Order
        </Button>
      </Form>
    </Container>

  );
}
export default Checkout;