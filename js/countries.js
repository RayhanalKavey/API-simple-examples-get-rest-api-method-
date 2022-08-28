const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  const countryConteiner = document.getElementById("countries-container");
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0] : "No capital"}</p>
    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    `;
    countryConteiner.appendChild(countryDiv);
  });
};
const loadCountryDetail = (countryCode) => {
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetil(data[0]));
};
const displayCountryDetil = (countryInfo) => {
  const { flags, name } = countryInfo;
  const { png } = flags;
  const { common, population } = name;
  const countryDetailField = document.getElementById("country-details");
  countryDetailField.innerHTML = `
  <h4>Name: ${common}</h4>
 <img src="${png}" alt="">
  `;
};
loadCountries();
