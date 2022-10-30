const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';


export const fetchStates = async () => {
    const url = `${BASE_URL}/localidades/estados`;
    const response = await fetch(url);
    return await response.json();
}
export const fetchCitiesForState =(state) =>{
    const url = `${BASE_URL}/localidades/estados/${state}/municipiosasdas`;
    const response =  fetch(url);
    return response.json();
}

