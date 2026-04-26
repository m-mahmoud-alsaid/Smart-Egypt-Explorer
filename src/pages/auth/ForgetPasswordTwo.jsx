import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function ForgetPasswordTwo() {
    let inputList = [
        { fieldType: 'input', type: 'text', name: 'code', placeholder: 'Code' },
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

export default ForgetPasswordTwo;