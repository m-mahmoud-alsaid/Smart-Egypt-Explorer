import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function Login() {
    let inputList = [
        { fieldType: 'input', type: 'email', name: 'email', placeholder: 'Email' },
        { fieldType: 'input', type: 'password', name: 'password', placeholder: 'Password' },
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='login'
                inputList={inputList}
            />
        </LoginLayout>
    )
}

export default Login;