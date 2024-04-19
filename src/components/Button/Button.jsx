import "./style.css";

function Button ({buttonName, buttonType}){
// const buttonClass = isPrimaryButton? 'main-button primary-button' : 'main-button secondary-button';

// const buttonClass = `main-button ${isPrimaryButton? 'primary-button' : 'secondary-button'}`;

return <button className='main-button' type={buttonType}>{buttonName}</button>
}

export default Button;