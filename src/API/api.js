import axios from 'axios';

export const aoSalvar =  (email, password, evento) => {
  evento.preventDefault();
      axios.post('https://burger-queen-api-mock-beige.vercel.app/login',{
      email,
      password,
})
    .then ((response) => {
     console.log(response.data);
    }).catch ((error) => {
    console.log(error.response.data);
  })
}

  