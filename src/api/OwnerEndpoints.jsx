const OwnerEndpoints = {
    profile: "/api/owner/profile",
    status: "/api/owner/status",
    services: "/api/owner/services",
    createService: "/api/owner/services",
    updateService: (id) => `/api/owner/services/${id}`,
    deleteService: (id) => `/api/owner/services/${id}`,
};

export default OwnerEndpoints