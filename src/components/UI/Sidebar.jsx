import PageTitle from './PageTitle'
import PageIcon from '../../assets/icons/egypt_key.png'

function Sidebar({ sideBarList = [] }) {
    return (
        <div className='flex flex-col h-full justify-between items-center'>
            <div className='hidden md:block'>
                <PageTitle />
            </div>
            <img src={PageIcon} className='w-9 md:hidden'></img>
            <ul className='flex flex-col gap-8'>
                {sideBarList.map(item => (
                    <li className='flex text-[#9C9D9F] justify-center
                    md:justify-start cursor-pointer hover:text-[#3183FF] duration-300' key={item.text}>
                        <span className='text-3xl md:mr-6'>{item.icon}</span>
                        <span className='hidden text-l font-bold md:block '>{item.text}</span>
                    </li>
                ))}
            </ul>
            <button className='text-white font-bold rounded bg-[#F00000]
            pt-3 pb-3 pl-1 pr-1 text-[12px] md:text-[16px] md:w-full hover:scale-[1.1] duration-300'>
                Logout</button>
        </div>
    )
}

export default Sidebar