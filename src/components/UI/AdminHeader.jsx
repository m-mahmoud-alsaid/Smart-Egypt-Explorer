import { NavLink } from "react-router-dom";

function AdminHeader({ type }) {

    const getRequestType = () => {
        if (type?.includes("restaurants")) return "restaurants-requests";
        if (type?.includes("hotels")) return "hotels-requests";
        if (type?.includes("tour-guides")) return "tour-guides-requests";
        return "restaurants-requests";
    };

    const getNormalType = () => {
        if (!type) return "restaurants";
        return type.replace("-requests", "");
    };

    const isRequests = type?.includes("requests");

    return (
        <div className='bg-[#9c9d9f1a] flex font-bold text-center w-full'>

            <NavLink
                to={`/admin?type=${getRequestType()}`}
                className={() =>
                    isRequests
                        ? "w-1/2 bg-[#3183FF] text-white py-2"
                        : "w-1/2 bg-white text-[#3183FF] py-2 hover:bg-gray-100 duration-300"
                }
            >
                Application Requests
            </NavLink>

            <NavLink
                to={`/admin?type=${getNormalType()}`}
                className={() =>
                    !isRequests
                        ? "w-1/2 bg-[#3183FF] text-white py-2"
                        : "w-1/2 bg-white text-[#3183FF] py-2 hover:bg-gray-100 duration-300"
                }
            >
                {type?.includes("restaurants") && "Restaurants"}
                {type?.includes("hotels") && "Hotels"}
                {type?.includes("tour-guides") && "Tour Guides"}
                {!type && "Restaurants"}
            </NavLink>

        </div>
    );
}

export default AdminHeader;