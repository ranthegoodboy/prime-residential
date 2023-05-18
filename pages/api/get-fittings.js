import { client } from "../../lib/graphql-init";
import { getResidentialProducts } from "../../lib/graphql-queries";

export default async function handler(req, res) {
  const products = getResidentialProducts();

  try {
    const fittings = await client
      .query(products)
      .then((res) => res.data.primeProducts.nodes);
    res.json(fittings);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.response.data.message });
  }
}
