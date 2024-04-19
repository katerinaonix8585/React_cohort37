import './style.css';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";


function LoginForm (){
    return <div className='login-form-wrapper'>
        <p>Login form</p>
        <Input inputLabel="Email" inputPlaceholder="Enter your email" />  
        <Input inputLabel="Password" inputPlaceholder="Enter your password" /> 
        <Button buttonName="Login"/> 
        </div>
}

export default LoginForm;