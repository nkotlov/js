const API_URL = "https://restcountries.com/v3.1/all";

async function fetchCountries() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        return data.map(country => ({
            name: country.translations?.rus?.common || country.name.common,
            flag: country.flags?.svg || country.flags?.png,
            region: country.region
        })).filter(country => country.flag);
    } catch (error) {
        console.error("Ошибка загрузки API:", error);
        return [];
    }
}

export { fetchCountries };
