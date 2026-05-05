import Image from '../../assets/images/login.png';
import { AiOutlineEye } from "react-icons/ai";
import { useState } from 'react'

function RequestCard({ requestInfoList, onApprove, onReject, type }) {
    const [openImage, setOpenImage] = useState(null);
    const item = requestInfoList;
    const baseURL = import.meta.env.VITE_BASE_URL;

    const imageUrl =
        type === "tour-guides-requests"
            ? (item.photoUrl ? `${baseURL}${item.photoUrl}` : Image)
            : (item.documentUrl ? `${baseURL}${item.documentUrl}` : Image);

    const cvUrl = item.documentUrl ? `${baseURL}${item.documentUrl}` : null;

    return (
        <div className='bg-[#9c9d9f1a] flex flex-col justify-between rounded-xl shadow-lg overflow-hidden'>

            <div>

                <div
                    className="relative cursor-pointer"
                    onClick={() => setOpenImage(imageUrl)}
                >
                    <img
                        src={imageUrl}
                        className="h-64 w-full object-cover mb-6"
                    />

                    <div className="absolute top-2 right-2 bg-black/60 p-2 rounded-full">
                        <AiOutlineEye className="text-white text-xl" />
                    </div>
                </div>
                {openImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setOpenImage(null)}
                    >
                        <img
                            src={openImage}
                            className="max-w-3xl max-h-[90vh] object-contain"
                        />
                    </div>
                )}

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
                        <p className='font-bold'>City</p>
                        <p className='text-[#9C9D9F]'>{item.city || 'empty'}</p>
                    </div>

                    {type === "tour-guides-requests" && (
                        <>
                            <div>
                                <p className='font-bold'>Name</p>
                                <p className='text-[#9C9D9F]'>{item.name || 'empty'}</p>
                            </div>

                            <div>
                                <p className='font-bold'>Age</p>
                                <p className='text-[#9C9D9F]'>{item.age || 'empty'}</p>
                            </div>

                            <div>
                                <p className='font-bold'>Languages</p>
                                <p className='text-[#9C9D9F]'>{item.languages || 'empty'}</p>
                            </div>

                            <div>
                                <p className='font-bold'>Business Type</p>
                                <p className='text-[#9C9D9F]'>{item.businessType || 'empty'}</p>
                            </div>

                        </>
                    )}

                    {(type === "restaurants-requests" || type === "hotels-requests") && (
                        <>
                            <div>
                                <p className='font-bold'>Title</p>
                                <p className='text-[#9C9D9F]'>{item.title || 'empty'}</p>
                            </div>

                            <div>
                                <p className='font-bold'>Category</p>
                                <p className='text-[#9C9D9F]'>{item.category || 'empty'}</p>
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
                                <p className='font-bold'>Longitude</p>
                                <p className='text-[#9C9D9F]'>{item.longitude || 'empty'}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className='flex mt-4 flex-wrap'>
                {type === "tour-guides-requests" && cvUrl && (
                    <div className="col-span-2 w-full">
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-blue-500 text-white font-bold py-2 hover:bg-blue-600 duration-300"
                        >
                            View CV
                        </a>
                    </div>
                )}
                <button
                    onClick={() => onApprove(item.dashboardUserId)}
                    className='flex-1 bg-[#49D94E] py-2 text-white font-bold hover:bg-green-500 duration-300'
                >
                    Approve
                </button>

                <button
                    onClick={() => onReject(item.dashboardUserId)}
                    className='flex-1 bg-[#F00000] py-2 text-white font-bold hover:bg-red-600 duration-300'
                >
                    Reject
                </button>
            </div>

        </div>
    );
}

export default RequestCard;