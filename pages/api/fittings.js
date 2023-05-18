import axios from "axios";
export default async function handler(req, res) {
  if (req.method !== "GET") return;

  try {
    const results = await axios
      .get(
        `${process.env.API_URL}/residentials?populate=*&pagination[page]=1&pagination[pageSize]=500`
      )
      .then((res) => res.data);

    if (results) {
      res.status(200).json(results);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.response.data.message });
  }
}
