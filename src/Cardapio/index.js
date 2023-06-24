import './Cardapio.css';
import React, { useState, useEffect } from 'react';
import { Botao } from '../Botao';
import { Switch } from '../Switch';
import { acessarCardapio } from '../API/api';

export function Cardapio() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
    acessarCardapio(localStorage.getItem("token"))
    .then((response) => {
        setProdutos(response.data)
    })
    }, [])
    return(
        <section className='cardapio'>

            <section className='switch'>
                <Switch/>
            </section>
            
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
                {produtos.map((produto) =>
                <div className='card'>
                <img src={produto.image} alt=''></img>
                <p className='descricao'>{produto.name}</p>
                <p>R${produto.price}</p>
                <div className='adicionar'>    
                <Botao> - </Botao>
                <p className='adicionar'> 0</p>
                <Botao> + </Botao>
                    </div>
                  </div>
              
                )}
            </section>
        
        </section>
    )
}