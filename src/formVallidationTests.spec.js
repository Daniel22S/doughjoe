import { checkoutNameValidation } from './checkoutFormValidation'
import { checkoutCityValidation } from './checkoutFormValidation'
import { checkoutAddressLineOneValidation } from './checkoutFormValidation'
import { checkoutPostCodeValidation } from './checkoutFormValidation'


describe('checkoutNameValidation', () => {
	it("this name is less than two characters - expect return true", () => {
		const result = checkoutNameValidation("j");
		expect(result).toEqual(true);
	})
})

describe('checkoutAddressLineOneValidation', () => {
	it("is less than one character, return true", () => {
		const result = checkoutAddressLineOneValidation("");
		expect(result).toEqual(true);
	})
})

describe('checkoutCityValidation', () => {
	it("is a number, return true", () => {
		const result = checkoutCityValidation("9");
		expect(result).toEqual(true);
	})
})

describe('checkoutPostCodeValidation', () => {
	it("is not a valid post code, return true", () => {
		const result = checkoutPostCodeValidation("j");
		expect(result).toEqual(true);
	})

	it("is a valid post code, return false", () => {
		const result = checkoutPostCodeValidation("S3 2GJ");
		expect(result).toEqual(false);
	})
})