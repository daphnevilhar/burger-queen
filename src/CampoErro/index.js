import './CampoErro.css';

export function CampoErro(props) {
  return (
    <div className="campo-erro">
      <p>{props.valor}</p>
    </div>
  );
}
