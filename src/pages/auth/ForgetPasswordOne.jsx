import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function ForgetPasswordOne() {
    let inputList = [
        { fieldType: 'input', type: 'email', name: 'email', placeholder: 'Email' },
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='forget'
                inputList={inputList}
                submitButtonTxt='Get Code'
            />
        </LoginLayout>
    )
}

export default ForgetPasswordOne;