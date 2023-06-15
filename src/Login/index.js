import { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { Acesso } from '../API/api';
import './Login.css';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form submetido =>', email, senha)
        console.log("api ok?", Acesso)
    }

    return (
        <section className='login'>
            <form onSubmit={aoSalvar}>
                <CampoTexto 
                    placeholder='Email' 
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    placeholder='Senha' 
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                />
                <Botao>
                    Entrar
                </Botao>
            </form>
        </section>
        
    )
}