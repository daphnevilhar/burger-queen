import axios from 'axios';

export const Acesso =() =>{
axios.post('burger-queen-api-mock-beige.vercel.app/login')
.then((resposta)=>{
    console.log('TA AQUI:', resposta.data.accessToken)
  }).catch((erro)=>{
      console.log(erro)
  })
};