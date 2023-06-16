import './CampoTexto.css';

const CampoTexto = (props) => (
        <div className='campo-texto'>
            <input
            placeholder={props.placeholder}
            type={props.type}
            />
        </div>
);

export default CampoTexto;
