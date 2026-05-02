const baseURL = import.meta.env.VITE_BASE_URL;

export async function postAuthData(url, data, errorMessage = "Request Failed") {
    const response = await fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let result;

    try {
        result = await response.json();
    } catch {
        result = null;
    }

    if (!response.ok) {
        throw new Error(result?.message || errorMessage);
    }

    return result;
}

export async function postFormData(url, data, errorMessage = "Request Failed") {
    const response = await fetch(`${baseURL}${url}`, {
        method: "POST",
        body: data
    });

    let result;

    try {
        result = await response.json();
    } catch {
        result = null;
    }

    if (!response.ok) {
        throw new Error(result?.message || errorMessage);
    }

    return result;
}