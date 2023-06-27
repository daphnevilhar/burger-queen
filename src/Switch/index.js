import './Switch.css';

export const Switch = (props) => {
    return (
    <label className="switch">
      <input onChange={props.onChange} checked={props.checked} type="checkbox"/>
      <span className="slider round"></span>

    </label>
    )
}