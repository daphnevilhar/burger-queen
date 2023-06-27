import { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { Switch } from '../Switch';


// function fazerPedido (){
//     const [produto, setProduto]= useState([]);
//     const adicionarAoPedido = (evento) =>{
//         evento.preventDefault();
//         const adicionar = produto.produtcts.name


//     }



export const Pedido = (produto) => {
    return ( 
        <><div className='pagina-pedido'>
            <Switch />
        </div><section className='enviar-pedido'>
                <form onSubmit={(evento) => fazerPedido(evento)}>
                    <CampoTexto 
                     type="text"
                      placeholder="Nome do cliente">
                    </CampoTexto>
                    <CampoTexto type="number"
                      placeholder="Mesa"></CampoTexto>
                    <h1> Itens </h1>
                    <h1> Preço </h1> <hr></hr>
                    <h1> Total </h1>
                    <Botao> Enviar Pedido</Botao>
                    
                    {produto.children}
                </form>
            </section></>
           
        
    )
}