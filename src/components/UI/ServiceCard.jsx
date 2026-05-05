import Image from '../../assets/images/login.png';

function ServiceCard({ requestInfoList, onDelete, onEdit }) {

    const baseURL = import.meta.env.VITE_BASE_URL;

    return (
        <div className='bg-[#9c9d9f1a] flex flex-col justify-between rounded-xl overflow-hidden'>

            <div>
                <img
                    src={
                        requestInfoList?.imageUrl
                            ? baseURL + requestInfoList.imageUrl
                            : Image
                    }
                    className='h-48 w-full object-cover'
                />

                <div className='p-3'>
                    <p className='font-bold text-xl'>{requestInfoList?.title || 'No Title'}</p>
                    <p className='text-gray-500'>{requestInfoList?.description || 'No Description'}</p>
                    <p className='text-green-500 font-bold'>{requestInfoList?.price || 'No Price'}</p>
                </div>
            </div>

            <div className='flex'>
                <button
                    onClick={() => onEdit(requestInfoList)}
                    className='flex-1 bg-green-500 font-bold hover:bg-green-600 duration-300 text-white py-2'
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(requestInfoList.ownerServiceId)}
                    className='flex-1 bg-red-500 font-bold hover:bg-red-600 duration-300 text-white py-2'
                >
                    Delete
                </button>
            </div>

        </div>
    );
}

export default ServiceCard;