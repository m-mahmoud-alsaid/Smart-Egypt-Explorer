import image from '../../assets/images/login.png'

function LoginLayout({ children }) {
    return (
        <div className='min-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2'>
            <div className='p-5 overflow-y-auto h-screen'>
                {children}
            </div>
            <div className='hidden md:block md:h-screen md:overflow-hidden'>
                <img
                    className='object-cover w-full h-full'
                    src={image}
                    alt="login image" />
            </div>
        </div>
    )
}

export default LoginLayout;