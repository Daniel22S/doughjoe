import { getTotalNutritionalValue } from "./nutritionalvalue";

const fakeData = [
  {
    sugar_g: 2.6,
    fiber_g: 1.2,
    serving_size_g: 100,
    sodium_mg: 4,
    potassium_mg: 23,
    fat_saturated_g: 0,
    fat_total_g: 0.2,
    calories: 18.2,
    cholesterol_mg: 0,
    protein_g: 0.9,
    carbohydrates_total_g: 3.9,
  },
  {
    sugar_g: 6,
    fiber_g: 4,
    serving_size_g: 8,
    sodium_mg: 34,
    potassium_mg: 41,
    fat_saturated_g: 1,
    fat_total_g: 4,
    calories: 13,
    cholesterol_mg: 1,
    protein_g: 2,
    carbohydrates_total_g: 4,
  },
];

const fakeObject = {
  sugar_g: 8.6,
  fiber_g: 5.2,
  serving_size_g: 108,
  sodium_mg: 38,
  potassium_mg: 64,
  fat_saturated_g: 1,
  fat_total_g: 4.2,
  calories: 31.2,
  cholesterol_mg: 1,
  protein_g: 2.9,
  carbohydrates_total_g: 7.9,
};
const fakeObject2 = {
  sugar_g: 100,
  fiber_g: 831,
  serving_size_g: 4134,
  sodium_mg: 4636,
  potassium_mg: 475,
  fat_saturated_g: 475,
  fat_total_g: 475.2,
  calories: 457.2,
  cholesterol_mg: 365,
  protein_g: 36.9,
  carbohydrates_total_g: 574.9,
};
const fakeData2 = [{
  sugar_g: 2.6,
  fiber_g: 1.2,
  serving_size_g: 100,
  sodium_mg: 4,
  potassium_mg: 23,
  fat_saturated_g: 0,
  fat_total_g: 0.2,
  calories: 18.2,
  cholesterol_mg: 0,
  protein_g: 0.9,
  carbohydrates_total_g: 3.9,
}];
const fakeObject3 = {
  sugar_g: 2.6,
  fiber_g: 1.2,
  serving_size_g: 100,
  sodium_mg: 4,
  potassium_mg: 23,
  fat_saturated_g: 0,
  fat_total_g: 0.2,
  calories: 18.2,
  cholesterol_mg: 0,
  protein_g: 0.9,
  carbohydrates_total_g: 3.9,
};
const emptydata = [{}];
const emptyobject = {};

describe("nutritionalinfo", () => {
  it("adding up to the new object, passes", () => {
    const result = getTotalNutritionalValue(fakeData);
    expect(result).toEqual(fakeObject);
  });
  it("wrong nutinfo, it fails", () => {
    const result = getTotalNutritionalValue(fakeData);
    expect(result).not.toEqual(fakeObject2);
  });
  it("single object passes", () => {
    const result = getTotalNutritionalValue(fakeData2);
    expect(result).toEqual(fakeObject3);
  });
  it("empty object, passes", () => {
    const result = getTotalNutritionalValue(emptydata);
    expect(result).toEqual(emptyobject);
  });
});
