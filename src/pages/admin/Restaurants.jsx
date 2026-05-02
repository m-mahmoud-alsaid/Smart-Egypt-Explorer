import { IoFastFoodOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { GoPerson } from "react-icons/go";

import AdminLayout from '../../components/layouts/AdminLayout'
import AdminHeader from '../../components/UI/AdminHeader'
import CardList from '../../components/UI/CardList'

function Restaurants() {
    const sideBarList = [
        {
            icon: <IoFastFoodOutline />,
            text: 'Restaurants'
        },
        {
            icon: <LiaHotelSolid />,
            text: 'Hotels'
        },
        {
            icon: <GoPerson />,
            text: 'Tour Guides'
        },
    ]

    const requestInfoList = [
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
        [{ title: 'ID', text: '12300339' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' },
        { title: 'Name', text: 'Mohamed Mahmoud' }],
    ]
    const header = { text: 'Restaurants' };
    return (
        <AdminLayout
            sideBarList={sideBarList}
            header={<AdminHeader header={header} />}
            card={<CardList mode='request' cardListInfo={requestInfoList} />}>
        </AdminLayout>
    )
}

export default Restaurants