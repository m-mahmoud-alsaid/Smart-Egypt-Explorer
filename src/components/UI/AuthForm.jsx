import PageTitle from './PageTitle'
import Input from './Input'
import CustomSelect from './CustomSelect'

import { Link } from "react-router-dom";

import { HiOutlineUpload } from "react-icons/hi";

function AuthForm({ mode = 'login', inputList = [], onSubmit, submitButtonTxt = 'Login', isDisabled }) {
    return (
        <>
            <PageTitle />

            <h2 className='text-xl font-bold mb-1 mt-10'>
                {mode === 'login' && 'Login to your account'}
                {mode === 'create' && 'Create your account'}
                {mode === 'forget' && 'Forget your password'}
            </h2>

            <p className='text-[#9C9D9F] mb-6'>Welcome! Enter your data below</p>

            <form className='flex flex-col gap-3.5' onSubmit={onSubmit}>
                {inputList.map((value, index) => (
                    <div key={index} className=''>
                        {value.fieldType === "input" && (
                            <Input
                                name={value.name}
                                type={value.type}
                                placeholder={value.placeholder}
                                value={value.value}
                                onChange={value.onChange}
                            />
                        )}

                        {value.fieldType === "select" && (
                            <CustomSelect
                                placeholder={value.placeholder}
                                options={value.options}
                                name={value.name}
                                onSelect={value.onSelect}
                            />
                        )}

                        {value.fieldType === "file" && (
                            <label className='flex justify-between items-center text-[#9c9d9f75] 
                            text-xl pt-3 pb-3 pl-8 border-2 border-[#9C9D9F] rounded-lg'>
                                <p className=''>{value.placeholder}</p>
                                <HiOutlineUpload className='right-0 mr-3' />
                                <input
                                    name={value.name}
                                    type="file"
                                    hidden
                                    className="w-full"
                                    onChange={value.onChange}
                                />
                            </label>
                        )}

                        {mode === 'login' && index === inputList.length - 1 && (
                            <div className='mt-3.5 flex justify-between'>
                                <label className='flex items-center'>
                                    <input
                                        className='mr-4 w-4 h-4 accent-[#3183FF]'
                                        type="checkbox"
                                        defaultChecked />
                                    <span className='text-[#9C9D9F]'>Remember me</span>
                                </label>

                                <Link
                                    to="/forget-password-one"
                                    className='text-[#3183FF] font-bold'>
                                    Forget Password?
                                </Link>
                            </div>
                        )}
                    </div>
                ))}

                <button className="w-full p-3 text-xl font-bold text-white bg-[#3183FF] rounded-lg"
                    disabled={isDisabled}>
                    {isDisabled ? "Loading..." : submitButtonTxt}
                </button>
            </form>

            <div className='mt-5 text-center font-bold'>
                <span className='mr-2.5 text-[#9C9D9F]'>
                    {mode === 'login'
                        ? "Don't have an account?"
                        : null}

                    {mode === 'create'
                        ? "Have an account?"
                        : null}

                    {mode === 'forget'
                        ? "Have an account?"
                        : null}
                </span>

                {mode === 'login' && (
                    <Link to="/create-one" className='text-[#3183FF]'>Create an account</Link>
                )}

                {mode === 'create' && (
                    <Link to="/login" className='text-[#3183FF]'>Login to your account</Link>
                )}

                {mode === 'forget' && (
                    <Link to="/login" className='text-[#3183FF]'>Login to your account</Link>
                )}
            </div>
        </>
    )
}

export default AuthForm