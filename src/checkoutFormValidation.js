

export const checkoutNameValidation = (name) => {
  if (name.length < 2) {
    return (true);
  } else {
    return (false);
  }
}

export const checkoutAddressLineOneValidation = (addressLineOne) => {
  if (addressLineOne.length < 1) {
    return (true);
  } else {
    return (false);
  }
}

export const checkoutCityValidation = (city) => {
  if (!isNaN(city)) {
    return (true)
  } else {
    return (false)
  }
}

export const checkoutPostCodeValidation = (postCode) => {
  const postRegEx = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  if (!postRegEx.test(postCode)) {
    return (true)
  } else {
    return (false)
  }
}

export const checkoutBasketValidation = (basket) => {

  if (basket.length < 1) {
    return (true)
  } else {
    return (false)
  }
}
const checkoutFormValidation = (checkoutFormValues, basket) => {


  const workingErrors = {
    name: false,
    addressLineOne: false,
    city: false,
    postCode: false,
    basket: false,
  }

  workingErrors.name = checkoutNameValidation(checkoutFormValues.name);

  workingErrors.addressLineOne = checkoutAddressLineOneValidation(checkoutFormValues.addressLineOne);

  workingErrors.city = checkoutCityValidation(checkoutFormValues.city);

  workingErrors.postCode = checkoutPostCodeValidation(checkoutFormValues.postCode);

  workingErrors.basket = checkoutBasketValidation(basket);

  return workingErrors;
}

export default checkoutFormValidation;
