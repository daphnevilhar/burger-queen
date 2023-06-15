import { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { aoSalvar } from '../API/api';
import'./Login.css';


export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className='login'>
            <form onSubmit={(evento) => aoSalvar(email, password, evento)}>
                <CampoTexto 
                    type='text'
                    placeholder='Email' 
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto 
                    type='password'
                    placeholder='Senha' 
                    valor={password}
                    aoAlterado={valor => setPassword(valor)}
                />
                <Botao>
                    Entrar
                </Botao>
            </form>
        </section>
        
    )
    }