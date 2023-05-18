import _ from "lodash";

export const categorizeFittings = (fittings) => {
  const sortedFittings = fittings.sort();
  const categories = _.groupBy(sortedFittings, "primeCategories.nodes[0].name");
  return Object.keys(categories).map((category) => {
    return {
      category,
      fittings: categories[category],
    };
  });
};
