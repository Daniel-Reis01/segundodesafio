const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';


export const fetchStates = async () => {
    const url = `${BASE_URL}/localidades/distritos
    `;
    const response = await fetch(url);
    return await response.json();
}
//axkjcds