import axios from 'axios';

if (!process.env.REACT_APP_API_BASE) {
  console.error(
    'REACT_APP_API_BASE variable not loaded properly. Check your .env file please!'
  );
}

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 30000
});

export default client;
