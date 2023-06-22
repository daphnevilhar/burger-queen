import './Cardapio.css';
import { Botao } from '../Botao';
import { Switch } from '../Switch';

export function Cardapio() {
    return(
        <section>
        <Switch/>
        <Botao>
            Café da manhã
        </Botao>
        <Botao>
            Almoço
        </Botao><Botao>
            Bebidas
        </Botao>
        </section>
        

    )
}