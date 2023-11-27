import axios from "axios";

async function fetchData() {
  const response = await axios.get('https://run.mocky.io/v3/9d0e24dd-c6f5-40bf-8cf0-3935087302d1');

  return response.data;
}

export default fetchData