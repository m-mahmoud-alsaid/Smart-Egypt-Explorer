const AdminEndpoints = {
    restaurants: "/api/admin/restaurants",
    hotels: "/api/admin/hotels",
    tourGuides: "/api/admin/tourguides",
    approveApplication: (id) => `/api/admin/applications/${id}/approve`,
    rejectApplication: (id) => `/api/admin/applications/${id}/reject`,
};

export default AdminEndpoints