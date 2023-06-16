import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import CampoErro from '../CampoErro';
import aoSalvar from '../API/api';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function fazerLogin (evento){
   evento.preventDefault();
   aoSalvar(email, password)
   .then(()=> {
    console.log('entrou: ')
   }).catch ((erro) => setError(erro.response.data))

  }
  

  return (
    <section className="login">
      <form onSubmit={(evento) => fazerLogin(evento)
        
      }>
        <CampoTexto
          type="text"
          placeholder="Email"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <CampoTexto
          type="password"
          placeholder="Senha"
          valor={password}
          aoAlterado={(valor) => setPassword(valor)}
        />
        <CampoErro valor={error}/>
        <Botao>
          Entrar
        </Botao>
      </form>
    </section>

  );
}


export default Login;
