import './Botao.css';

const Botao = (props) => (
        <button className='botao'>
            {props.children}
        </button>
);

export default Botao;
