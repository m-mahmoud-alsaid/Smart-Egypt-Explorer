import Sidebar from '../UI/Sidebar'

function AdminLayout({ sideBarList = [], card, header }) {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='relative shadow-2xl z-5 h-full pr-2 pl-2 pt-3.5 pb-3.5 w-17 
            md:w-48 md:p-4 bg-[#9c9d9f1a]'>
                <Sidebar sideBarList={sideBarList} />
            </div>
            <div className='flex-1 overflow-y-auto'>
                <div className='flex justify-center shadow-lg relative z-2'>
                    {header}
                </div>
                <div className='mt-5 mb-5 ml-3 mr-3 sm:mr-5 sm:ml-5'>
                    {card}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout