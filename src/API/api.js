import axios from 'axios';

const aoSalvar = (email, password, evento) => {
  evento.preventDefault();
  return axios.post('https://burger-queen-api-mock-beige.vercel.app/login', {
    email,
    password,
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    }).catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
};

export default aoSalvar;
