
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/';

const responseTojson = (response) => response.json()

export const fetchStates = async () => {
    const url = `${BASE_URL}localidades/estados`;
    return fetch(url).then(responseTojson);
};
export const fetchCitiesForState = async (state) => {
    // if(!state) return Promise.resolve([]);
    const url = `${BASE_URL}localidades/estados/${state}/municipios`;
    return fetch(url).then(responseTojson);
};
