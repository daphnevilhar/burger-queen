import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { CampoErro } from '../CampoErro';
import { aoSalvar } from '../API/api.js';
import { Logo } from '../Logo';
import'./Login.css';

export function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function fazerLogin(evento) {
    evento.preventDefault();
    const email = evento.target[0].value;
    const password = evento.target[1].value;
    aoSalvar(email, password)
      .then(() => {
        navigate("/cardapio")
      }).catch((erro) => setError(erro.response.data));
  }

  return (
    <div className="App">
    <Logo/>
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
    </div>
    )
};