import Image from '../../assets/images/login.png'

function ServiceCard({ requestInfoList = [] }) {
    return (
        <div className='bg-[#9c9d9f1a] flex flex-col justify-between rounded-xl overflow-hidden'>
            <div className='flex flex-col'>
                <img src={Image} className='h-48 mb-8 object-cover'></img>
                <div className='flex flex-col gap-5 sm:flex-row sm:flex-wrap'>
                    {requestInfoList.map((value, index) => (
                        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] pl-3 pr-3 flex-1' key={index}>
                            <div className='truncate'>
                                <p className='font-bold truncate'>{value.title}</p>
                                <p className='text-[#9C9D9F] truncate'>{value.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex mt-4'>
                <button className='flex-1 bg-[#49D94E] pb-3 pt-2 text-white font-bold'>Edit</button>
                <button className='flex-1 bg-[#FFCA28] pb-3 pt-2 text-white font-bold'>Hide</button>
                <button className='flex-1 bg-[#F00000] pb-3 pt-2 text-white font-bold'>Delete</button>
            </div>
        </div>
    )
}

export default ServiceCard