import './CampoTexto.css'

export const CampoTexto = (props) => {

    function aoDigitado(evento){
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} type={props.type}/>
        </div>
    )
};