import './CampoErro.css';

function CampoErro(props) {
  return (
    <div className="campo-erro">
      <p>{props.valor}</p>
    </div>
  );
}

export default CampoErro;
