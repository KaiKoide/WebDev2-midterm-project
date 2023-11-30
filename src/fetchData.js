import axios from "axios";

async function fetchData() {
  const response = await axios.get('https://run.mocky.io/v3/15bccc66-315a-4a46-bafa-ef06e9c906c5');

  return response.data;
}

export default fetchData