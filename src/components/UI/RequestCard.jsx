import Image from '../../assets/images/login.png';

function RequestCard({ requestInfoList, onApprove, onReject }) {

    const item = requestInfoList;

    const baseURL = import.meta.env.VITE_BASE_URL;

    const imageUrl = requestInfoList?.documentUrl
        ? `${baseURL}${requestInfoList.documentUrl}`
        : Image;

    return (
        <div className='bg-[#9c9d9f1a] flex flex-col justify-between rounded-xl shadow-lg overflow-hidden'>
            <div>
                <img src={imageUrl} className='h-48 w-full object-cover mb-6' />

                <div className='grid grid-cols-2 gap-4 px-4'>
                    <div>
                        <p className='font-bold'>ID</p>
                        <p className='text-[#9C9D9F]'>{item.dashboardUserId || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Email</p>
                        <p className='text-[#9C9D9F]'>{item.email || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Title</p>
                        <p className='text-[#9C9D9F]'>{item.title || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Category</p>
                        <p className='text-[#9C9D9F]'>{item.category || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>City</p>
                        <p className='text-[#9C9D9F]'>{item.city || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Location</p>
                        <p className='text-[#9C9D9F]'>{item.location || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Latitude</p>
                        <p className='text-[#9C9D9F]'>{item.latitude || 'empty'}</p>
                    </div>

                    <div>
                        <p className='font-bold'>Longitude </p>
                        <p className='text-[#9C9D9F]'>{item.longitude || 'empty'}</p>
                    </div>

                </div>
            </div>

            <div className='flex mt-4'>
                <button
                    onClick={onApprove}
                    className='flex-1 bg-[#49D94E] py-2 text-white font-bold hover:bg-green-500'
                >
                    Approve
                </button>

                <button
                    onClick={onReject}
                    className='flex-1 bg-[#F00000] py-2 text-white font-bold hover:bg-red-500'
                >
                    Reject
                </button>
            </div>

        </div>
    );
}

export default RequestCard;