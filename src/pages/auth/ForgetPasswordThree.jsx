import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function ForgetPasswordThree() {
    let inputList = [
        { fieldType: 'input', type: 'password', name: 'password', placeholder: 'Password' },
        { fieldType: 'input', type: 'password', name: 'confirm password', placeholder: 'Confirm Password' },
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='forget'
                inputList={inputList}
                submitButtonTxt='Confirm'
            />
        </LoginLayout>
    )
}

export default ForgetPasswordThree;