function Input({ type = 'text', placeholder, value, onChange }) {
    return (
        <label className=''>
            <input
                className="w-full pl-8 pt-3 pb-3 text-xl
                text-[#9C9D9F] rounded-lg border-2 border-[#9C9D9F]"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </label>
    )
}

export default Input;