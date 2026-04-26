import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function CreateAccOne() {
    let inputList = [
        { fieldType: 'input', type: 'email', name: 'email', placeholder: 'Email' },
        { fieldType: 'input', type: 'password', name: 'password', placeholder: 'Password' },
        { fieldType: 'select', placeholder: 'Business Type', name: 'business', options: ['Restuarant', 'Hotel', 'Tour Guide'] },
        { fieldType: 'input', type: 'text', name: 'title', placeholder: 'Title' },
        { fieldType: 'input', type: 'text', name: 'city', placeholder: 'City' },
        { fieldType: 'file', type: 'file', name: 'id', placeholder: 'ID' },
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='create'
                inputList={inputList}
                submitButtonTxt='Next'
            />
        </LoginLayout>
    )
}

export default CreateAccOne;