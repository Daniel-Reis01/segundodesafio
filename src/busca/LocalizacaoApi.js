const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';


export const fetchStates = async () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(response => response.json());
}
export const fetchCitiesForState =(state) =>{
    const url = `${BASE_URL}/localidades/estados/${state}/municipiosasdas`;
    return fetch(url).then(response => response.json());
}

