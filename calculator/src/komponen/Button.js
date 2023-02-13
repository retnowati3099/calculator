import HandleClick from "./HandleClick";
function Button (props){
    return (
        <input type="button" value={props.label} onClick={(e) => getValue(e.target.value)} />
    );
}

export default Button;