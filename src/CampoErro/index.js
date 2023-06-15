import './CampoErro.css';

function CampoErro(props) {
  return (
    <div className="campo-erro">
      <p value={props.valor} />
    </div>
  );
}

export default CampoErro;
