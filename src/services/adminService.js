import AdminEndpoints from '../api/AdminEndpoints'

const baseURL = import.meta.env.VITE_BASE_URL;

export async function getApplicationData(url) {
    const token = localStorage.getItem("userToken");

    const response = await fetch(`${baseURL}${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch application data");
    }

    let result;
    try {
        result = await response.json();
    } catch {
        result = null;
    }

    return result;
}

export async function approveApplication(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.approveApplication(id)}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Approve failed");
}

export async function rejectApplication(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.rejectApplication(id)}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function hideRestaurants(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.hideRestaurants(id)}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function deleteRestaurants(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.deleteRestaurants(id)}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function hideHotels(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.hideHotels(id)}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function deleteHotels(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.deleteHotels(id)}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function hideTour(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.hideTour(id)}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}

export async function deleteTour(id) {
    const token = localStorage.getItem("userToken");

    const res = await fetch(`${baseURL}${AdminEndpoints.deleteTour(id)}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Reject failed");
}