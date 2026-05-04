const AdminEndpoints = {
    restaurants: "/api/admin/restaurants",
    hotels: "/api/admin/hotels",
    tourGuides: "/api/admin/tourguides",
    restaurantsRequests: "/api/admin/applications/restaurants",
    hotelsRequests: "/api/admin/applications/hotels",
    tourGuidesRequests: "/api/admin/applications/tourguides",
    approveApplication: (id) => `/api/admin/applications/${id}/approve`,
    rejectApplication: (id) => `/api/admin/applications/${id}/reject`,
    hideRestaurants: (id) => `/api/admin/restaurants/${id}/hide`,
    deleteRestaurants: (id) => `/api/admin/restaurants/${id}`,
    hideHotels: (id) => `/api/admin/hotels/${id}/hide`,
    deleteHotels: (id) => `/api/admin/hotels/${id}`,
    hideTour: (id) => `/api/admin/tourguides/${id}/hide`,
    deleteTour: (id) => `/api/admin/tourguides/${id}`,
};

export default AdminEndpoints