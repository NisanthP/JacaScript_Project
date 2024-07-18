// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function calculateAverageCatWeight() {
  const catsData = await fetchData(catsAPI);
  let totalWeight = 0;
  let count = 0;

  catsData.forEach(cat => {
    const weightRange = cat.weight.metric.split(' - ').map(Number);
    const averageWeight = (weightRange[0] + weightRange[1]) / 2;
    totalWeight += averageWeight;
    count++;
  });

  const averageWeight = totalWeight / count;
  console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
}

async function findLargestCountries() {
  const countriesData = await fetchData(countriesAPI);
  const sortedCountries = countriesData.sort((a, b) => b.area - a.area);
  const largestCountries = sortedCountries.slice(0, 10);
  const countryNames = largestCountries.map(country => country.name);
  console.log('10 largest countries by area:', countryNames);
}

async function countOfficialLanguages() {
  const countriesData = await fetchData(countriesAPI);
  const languagesSet = new Set();

  countriesData.forEach(country => {
    country.languages.forEach(language => {
      languagesSet.add(language.name);
    });
  });

  console.log('Total number of official languages:', languagesSet.size);
}

calculateAverageCatWeight();
findLargestCountries();
countOfficialLanguages();
