import { apiCovid } from "./services/covid.mjs";


const findCountry = async () => {
    const countryNames = await apiCovid.getDataCoronaCountries();

    let countryName = countryNames.find(function (countryName) {
        return countryName.CountryCode === 'VN';
    })

    console.log(countryName)
}

findCountry();






