const baseURL = import.meta.env.VITE_BASE_URL;

export async function getOwnerProfile() {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch profile");
    }

    return await res.json();
}

export async function updateOwnerProfile(data) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Failed to update profile");
    }

    return await res.json();
}

export async function getOwnerServices() {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/services`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }

    return await res.json();
}

export async function createOwnerService(data) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/services`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: data,
    });

    if (!res.ok) {
        throw new Error("Failed to create service");
    }

    return await res.json();
}

export async function updateOwnerService(id, data) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/services/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: data,
    });

    if (!res.ok) {
        throw new Error("Failed to update service");
    }

    return await res.json();
}

export async function deleteOwnerService(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}/api/owner/services/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to delete service");
    }

    return await res.json();
}