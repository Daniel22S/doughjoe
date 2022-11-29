import { pizzaPriceSummary } from "./pizzaPriceSummary";

describe('pizzaPriceSummary', () => {

    it('This pizza should be regular with no toppings and cost £11.99', () => {
        

      const result = pizzaPriceSummary('regular', {
        tomato: {
          id: "Tomato",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        ham: {
          id: "Ham",
          amount: 0,
          gramsPerServing: 30,
          pencePerServing: 70,
        },
        pineapple: {
          id: "Pineapple",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        cheese: {
          id: "Cheese",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        mushroom: {
          id: "Mushroom",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
      });
      
      expect(result).toEqual(11.99);
    })

    it('This pizza has everything possible, (stuffed crust, 2 of every topping), should cost £13.99', () => {

      const result = pizzaPriceSummary('stuffedcrust', {
        tomato: {
          id: "Tomato",
          amount: 2,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        ham: {
          id: "Ham",
          amount: 2,
          gramsPerServing: 30,
          pencePerServing: 70,
        },
        pineapple: {
          id: "Pineapple",
          amount: 2,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        cheese: {
          id: "Cheese",
          amount: 2,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        mushroom: {
          id: "Mushroom",
          amount: 2,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
      });

      expect(result).toEqual(19.39);
    })

    it('This pizza is an abomination, just thin crust with 1 pineapple and 100 tomatoes, should cost £61.49', () => {

      const result = pizzaPriceSummary('thincrust', {
        tomato: {
          id: "Tomato",
          amount: 100,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        ham: {
          id: "Ham",
          amount: 0,
          gramsPerServing: 30,
          pencePerServing: 70,
        },
        pineapple: {
          id: "Pineapple",
          amount: 1,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        cheese: {
          id: "Cheese",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
        mushroom: {
          id: "Mushroom",
          amount: 0,
          gramsPerServing: 25,
          pencePerServing: 50,
        },
      });

      expect(result).toEqual(61.49);
    })
});