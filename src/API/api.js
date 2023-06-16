import axios from 'axios';

export const aoSalvar = (email, password) => axios.post('https://burger-queen-api-mock-beige.vercel.app/login', {
  email,
  password,
});
