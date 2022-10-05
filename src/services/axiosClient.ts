import axios from 'axios';

if (!process.env.REACT_APP_API_BASE) {
  console.error(
    'REACT_APP_API_BASE variable not loaded properly. Check your .env file please!'
  );
}

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 30000,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY as string,
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST as string
  }
});

export default client;
