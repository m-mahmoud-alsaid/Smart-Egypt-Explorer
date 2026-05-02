function AdminHeader({ header }) {
    return (
        <div className=' bg-[#9c9d9f1a] pl-5 pr-5 pt-3 pb-3 w-full
        font-bold text-[#3183FF] overflow-hidden text-center'>
            <p className='text-white pb-2 pt-2 bg-[#3183FF] rounded-t-lg cursor-pointer 
            sm:w-1/2 sm:inline-block sm:rounded-l-lg sm:rounded-none'
                onClick={header.onClick}>Application Requests</p>
            <p className='pt-2 pb-2 rounded-b-lg cursor-pointer bg-white
            sm:inline-block sm:w-1/2 sm:rounded-r-lg sm:rounded-none'
                onClick={header.onClick}>{header.text}</p>
        </div>
    )
}

export default AdminHeader