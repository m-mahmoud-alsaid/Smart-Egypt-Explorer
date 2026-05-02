import { LuLayoutTemplate } from "react-icons/lu";
import { GoPerson } from "react-icons/go";

import Input from '../../components/UI/Input'
import ServiceForm from '../../components/UI/ServiceComponent'
import AdminLayout from '../../components/layouts/AdminLayout'
import ServiceCard from '../../components/UI/ServiceCard'

import { useState } from 'react'

import { IoSearch } from "react-icons/io5";

function Services() {
    const [data, setData] = useState(['item', 'Mahmoud', 'Mohamed', 'Mahmoud']);
    const [search, setSearch] = useState('');
    const sideBarList = [
        {
            icon: <GoPerson />,
            text: 'Profile'
        },
        {
            icon: <LuLayoutTemplate />,
            text: 'Services'
        },
    ];

    const handleSearch = (e) => setSearch(e.target.value);
    const filteredData = data.filter(value => (
        value.toLowerCase().includes(search.toLowerCase())
    ));

    console.log(filteredData);
    const requestInfoList = [
        { title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }];

    return (
        <AdminLayout
            sideBarList={sideBarList}
            card={<div className='grid gap-4'>
                <ServiceForm />
                <div className='relative justify-center'>
                    <IoSearch className='absolute text-2xl top-1/2 translate-[-50%]
                    left-4 text-[#9c9d9f78]' />
                    <Input type='text' placeholder='Search...' onChange={handleSearch} />
                </div>
                <ServiceCard requestInfoList={requestInfoList} />
            </div>} />
    )
}

export default Services