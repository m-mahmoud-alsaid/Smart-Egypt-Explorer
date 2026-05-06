import PageTitle from './PageTitle'
import PageIcon from '../../assets/icons/logo.png'

import { NavLink, useSearchParams } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext'

function Sidebar({ sideBarList = [] }) {
    const [searchParams] = useSearchParams();
    const currentType = searchParams.get("type");
    const { logout } = useContext(AuthContext);

    return (
        <div className='flex flex-col h-full justify-between items-center'>
            <div className='flex flex-col items-center'>
                <div className='hidden md:block mb-6'>
                    <PageTitle />
                </div>
                <img
                    src={PageIcon}
                    className='w-9 md:hidden mb-6'
                    alt="logo"
                />
            </div>
            <ul className='flex flex-col gap-8'>
                {sideBarList.map(item => {
                    const isActive = currentType === item.type;
                    return (
                        <li key={item.text}>
                            <NavLink
                                to={item.path}
                                className={() =>
                                    isActive
                                        ? 'flex text-[#3183FF] justify-center md:justify-start cursor-pointer duration-300'
                                        : 'flex text-[#9C9D9F] justify-center md:justify-start cursor-pointer hover:text-[#3183FF] duration-300'
                                }
                            >
                                <span className='text-3xl md:mr-6'>
                                    {item.icon}
                                </span>
                                <span className='hidden text-l font-bold md:block'>
                                    {item.text}
                                </span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            <button
                className='text-white font-bold rounded bg-[#F00000] pt-3 pb-3 pl-1 pr-1 text-[12px] md:text-[16px] md:w-full hover:bg-red-500 duration-300'
                onClick={logout}>

                Logout
            </button>

        </div>
    )
}

export default Sidebar