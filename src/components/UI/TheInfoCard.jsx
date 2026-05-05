import Image from '../../assets/images/login.png';
import { AiOutlineEye } from "react-icons/ai";
import { useState } from 'react';

function TheInfoCard({ infoItem, onHide, onDelete, type }) {

    const [openImage, setOpenImage] = useState(null);

    if (!infoItem) return null;

    const item = infoItem;
    const baseURL = import.meta.env.VITE_BASE_URL;

    let imageUrl = Image;
    let cvUrl = null;

    if (type === "tour-guides") {
        imageUrl = item.photoUrl ? `${baseURL}${item.photoUrl}` : Image;
        cvUrl = item.documentUrl ? `${baseURL}${item.documentUrl}` : null;
    } else {
        imageUrl = item.documentUrl ? `${baseURL}${item.documentUrl}` : Image;
    }

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

                    {type === "tour-guides" && (
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

                    {(type === "restaurants" || type === "hotels") && (
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
                        </>
                    )}

                </div>
            </div>

            <div className='flex mt-4 flex-wrap'>

                {type === "tour-guides" && cvUrl && (
                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-blue-500 text-white font-bold py-2 hover:bg-blue-600 duration-300"
                    >
                        View CV
                    </a>
                )}

                <button
                    onClick={() => onHide(item.dashboardUserId)}
                    className='flex-1 bg-yellow-500 py-2 text-white font-bold hover:bg-yellow-600 duration-300'
                >
                    Hide
                </button>

                <button
                    onClick={() => onDelete(item.dashboardUserId)}
                    className='flex-1 bg-[#F00000] py-2 text-white font-bold hover:bg-red-600 duration-300'
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TheInfoCard;