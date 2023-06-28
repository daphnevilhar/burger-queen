import './Cardapio.css';
import React, { useState, useEffect } from 'react';
import { Botao } from '../Botao';
import { Switch } from '../Switch';
import { acessarCardapio } from '../API/api';
import { useNavigate } from 'react-router-dom';

export function Cardapio() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
    acessarCardapio(localStorage.getItem("token"))
    .then((response) => {
        setProdutos(response.data)
    })
    }, [])
    return(
        <section className='cardapio'>

            <section  className='switch'/>
                <Switch onChange={()=>navigate("/pedido")}/>
                
            
            <section className='filtros'>
                <Botao>
                    Café da manhã
                </Botao>
                <Botao>
                    Almoço
                </Botao><Botao>
                    Bebidas
                </Botao>
            </section>
            
            <section className='posicao-cards'>
                {produtos.map((produto) => <div className='card'>
                    <img src={produto.image} alt=''></img>
                    <p className='descricao'>{produto.name}</p>
                    <p>R${produto.price}</p>
                    <p className='contagem'> 0</p>
                    
                    <div className='adicionar'>
                        
                        <Botao> - </Botao>
                        
                        <Botao> + </Botao>
                    </div>
                </div>

                )}
            </section>
        </section>
        
    )
}