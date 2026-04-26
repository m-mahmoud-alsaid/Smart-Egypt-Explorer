import AuthForm from '../../components/UI/AuthForm'
import LoginLayout from '../../components/layouts/LoginLayout'

function CreateAccTwo() {
    let inputList = [
        { fieldType: 'select', placeholder: 'Category', name: 'category', options: ['Food', 'Entertainment'] },
        { fieldType: 'input', type: 'text', name: 'location', placeholder: 'Location' },
        { fieldType: 'input', type: 'number', name: 'Longitude', placeholder: 'Longitude' },
        { fieldType: 'input', type: 'number', name: 'Latitude', placeholder: 'Latitude' },
    ]
    return (
        <LoginLayout>
            <AuthForm
                mode='create'
                inputList={inputList}
                submitButtonTxt='SignUp'
            />
        </LoginLayout>
    )
}

export default CreateAccTwo;