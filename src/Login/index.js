import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import CampoErro from '../CampoErro';
import aoSalvar from '../API/api';
import './Login.css';

function Login() {
  const [error, setError] = useState('');

  function fazerLogin(evento) {
    evento.preventDefault();
    const email = evento.target[0].value;
    const password = evento.target[1].value;
    aoSalvar(email, password)
      .then(() => {
        console.log('entrou: ');
      }).catch((erro) => setError(erro.response.data));
  }

  return (
    <section className="login">
      <form onSubmit={(evento) => fazerLogin(evento)}>
        <CampoTexto
          type="text"
          placeholder="Email"
        />
        <CampoTexto
          type="password"
          placeholder="Senha"
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
