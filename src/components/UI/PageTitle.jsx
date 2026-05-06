import PageImage from '../../assets/icons/logo.png'

function PageTitle() {
    return (
        <div className='flex items-center'>
            <img
                className='w-[45px]'
                src={PageImage} alt="Page Icon" />
            <h1 className='font-bold text-xl  ml-5 cursor-pointer'>
                <span className='text-[#FF7F50]'>Smart</span> <br />
                <span className='text-[#3183FF]'> Egypt Explorer !</span>
            </h1>
        </div>
    )
}

export default PageTitle