import Input from '../../components/UI/Input'

function ServiceComponent() {
    return (
        <div className='grid grid-cols-[1fr] gap-2'>
            <Input type='text' value='' name='' onChange='' placeholder='title' />
            <label className='border-2 border-[#9C9D9F] text-xl pt-3 pb-3 pl-8 p-8 rounded-lg'>
                <span className='text-[#9c9d9f78]'>Images</span>
                <input type='file' hidden value='' name='file' onChange='' />
            </label>
            <textarea
                className='md:col-span-2 resize-none border-2 border-[#9C9D9F] text-[#9C9D9F]
                text-xl pt-3 pb-3 pl-8 rounded-lg'
                name='description' rows='5' cols='20' onChange='' placeholder='Description' />
            <Input type='number' name='save' onChange='' placeholder='Price' />
            <input type='submit' value='Save' onChange=''
                className='text-xl pt-3 pb-3 rounded-lg
                bg-[#49D94E] text-white font-bold' />
        </div>
    )
}

export default ServiceComponent