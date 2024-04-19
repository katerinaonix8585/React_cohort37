import "./style.css";

function Input({inputName, inputType, inputPlaceholder, inputLabel}){
return <div className="main-input">
    <label>{inputLabel}</label>
    <input type={inputType} name={inputName} placeholder={inputPlaceholder} />
    </div> 

}

export default Input;