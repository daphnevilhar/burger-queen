import './CampoTexto.css'

export const CampoTexto = (props) => (
        <div className='campo-texto'>
            <input
            placeholder={props.placeholder}
            type={props.type}
            />
        </div>
);
