import axios from "axios";
import "dotenv/config";

const movieInstance = axios.create({
  baseURL: `${process.env.MOVIE_API_URL}`,
  headers: { "X-BetaSeries-Key": `${process.env.MOVIE_API_KEY}` }
})

export default movieInstance;