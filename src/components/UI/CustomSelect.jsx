import { useState } from 'react'

import { MdArrowDropDown } from "react-icons/md";

function CustomSelect({ options, placeholder, name, onSelect }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <div className="relative">
            <input type="hidden" name={name} value={selected} />
            <div
                className="pt-3 pb-3 pl-8 border-2 rounded-lg border-[#9C9D9F] text-xl text-[#9c9d9f75]
                cursor-pointer flex justify-between items-center"
                onClick={() => setOpen(!open)}
            >
                {selected || placeholder}
                <MdArrowDropDown className='mr-3 text-2xl' />
            </div>

            {open && (
                <div className="absolute w-full h-32 z-5 overflow-auto bg-white  border rounded-lg mt-1 shadow text-[#9C9D9F]">
                    {options.map((opt, i) => (
                        <div
                            key={i}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelected(opt);
                                setOpen(false);

                                if (onSelect) {
                                    onSelect({
                                        name,
                                        value: opt
                                    });
                                }
                            }}>
                            {opt}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default CustomSelect