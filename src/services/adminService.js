const baseURL = import.meta.env.VITE_BASE_URL;

export async function getApplicationData(url) {
    const response = await fetch(`${baseURL}${url}`);
    if (!response.ok) {
        throw new Error('Failed to fetch application data');
    }
    let result;
    try {
        result = await response.json();
    } catch {
        result = null;
    }
    return result;
}