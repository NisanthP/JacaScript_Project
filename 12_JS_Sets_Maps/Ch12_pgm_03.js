const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const countriesAPI = 'https://restcountries.com/v2/all';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function countLanguages() {
  const countriesData = await fetchData(countriesAPI);
  const languagesSet = new Set();

  countriesData.forEach(country => {
    country.languages.forEach(language => {
      languagesSet.add(language.name);
    });
  });

  console.log('Total number of languages:', languagesSet.size);
}

async function mostSpokenLanguages(countries, topN) {
  const countriesData = await fetchData(countriesAPI);
  const languageCount = {};

  countriesData.forEach(country => {
    country.languages.forEach(language => {
      if (language.name in languageCount) {
        languageCount[language.name]++;
      } else {
        languageCount[language.name] = 1;
      }
    });
  });

  const sortedLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(entry => ({ [entry[0]]: entry[1] }));

  console.log(sortedLanguages);
  return sortedLanguages;
}

countLanguages();
mostSpokenLanguages(countriesAPI, 10);
mostSpokenLanguages(countriesAPI, 3);


// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]