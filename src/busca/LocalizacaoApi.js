const BASE_URL = 'https://amazon-api.sellead.com/city';


export const fetchStates = async () => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    return await response.json();
}