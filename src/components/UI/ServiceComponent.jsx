import { useState, useEffect } from "react";
import Input from '../../components/UI/Input';

function ServiceForm({ onCreate, onSuccess, editingService, onClearEdit }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (editingService) {
            setTitle(editingService.title || "");
            setDescription(editingService.description || "");
            setPrice(editingService.price || "");
        }
    }, [editingService]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        if (image) formData.append("image", image);

        if (editingService) {
            await onCreate(formData, editingService.ownerServiceId);
            onClearEdit();
        } else {
            await onCreate(formData);
        }

        setTitle("");
        setDescription("");
        setPrice("");
        setImage(null);

        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className='grid gap-2'>

            <Input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label className='border-2 border-[#9C9D9F] text-xl pt-3 pb-3 pl-8 rounded-lg'>
                <span className='text-[#9c9d9f78]'>Upload Image</span>
                <input
                    type='file'
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </label>

            <textarea
                className='border-2 border-[#9C9D9F] text-[#9c9d9f] text-xl pt-3 pb-3 pl-8 rounded-lg resize-none'
                rows='5'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Input
                type='number'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type='submit'
                value={editingService ? "Update" : "Save"}
                className='text-xl pt-3 pb-3 rounded-lg bg-[#49D94E] text-white font-bold hover:bg-green-500 duration-300'
            />

        </form>
    );
}

export default ServiceForm;