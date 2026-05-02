import Image from '../../assets/images/login.png'

function RequestCard({ requestInfoList = [] }) {
    return (
        <div className='bg-[#9c9d9f1a] flex flex-col justify-between rounded-xl 
        shadow-lg overflow-hidden'>
            <div className='flex flex-col'>
                <img src={Image} className='h-48 mb-8 object-cover'></img>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5'>
                    {requestInfoList.map((value, index) => (
                        <div className='flex justify-between pl-3 pr-3' key={index}>
                            <div className='truncate'>
                                <p className='font-bold truncate'>{value.title}</p>
                                <p className='text-[#9C9D9F] truncate'>{value.text}</p>
                            </div>
                            <label className='relative w-15 h-6 rounded-[8px] ml-3
                            overflow-hidden bg-[#f23e3e49]'>
                                <div className='absolute top-[50%] translate-y-[-50%] 
                                w-[50%] h-[18px] bg-[#f00000] rounded-xl'></div>
                                <input type='checkbox' hidden />
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex mt-4'>
                <button className='flex-1 bg-[#49D94E] pb-3 pt-2 text-white font-bold'>Approve</button>
                <button className='flex-1 bg-[#F00000] pb-3 pt-2 text-white font-bold'>Reject</button>
            </div>
        </div>
    )
}

export default RequestCard