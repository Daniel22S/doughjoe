export const getTotalNutritionalValue = (nutritionalItems) => {
  return nutritionalItems.reduce((previous, current) => {
    const newObject = {};
    Object.keys(current).forEach((key) => {
      if (key !== "name") {
        newObject[key] = (previous[key] || 0) + current[key];
      }
    });
    return newObject;
  }, {});
};
