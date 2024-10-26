document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('countryForm').addEventListener('submit', function(event) {
      event.preventDefault();
      fetchData(document.getElementById('searchInput').value);
    });

    document.getElementById('allBtn').addEventListener('click', function() {
      fetchData('all');
    });
  });

  function fetchData(query) {
    let url = '';
    if (query === 'all') {
      url = 'https://restcountries.com/v3.1/all';
    } else {
      url = 'https://restcountries.com/v3.1/name/' + query;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayStatistics(data);
        displayCountryDetails(data);
        displayContinentSummary(data);
      })
      .catch(error => console.error('Error:', error));
  }

  function displayStatistics(data) {
    const numCountries = data.length;
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    const averagePopulation = totalPopulation / numCountries;

    document.getElementById('numCountries').textContent = numCountries;
    document.getElementById('totalPopulation').textContent = totalPopulation;
    document.getElementById('averagePopulation').textContent = Math.round(averagePopulation);

    document.getElementById('statisticsTable').style.display = 'block';
  }

  function displayCountryDetails(data) {
    const countryDetailsBody = document.getElementById('countryDetailsBody');
    countryDetailsBody.innerHTML = '';
    data.forEach(country => {
      const row = '<tr><td>' + country.name.common + '</td><td>' + country.population + '</td></tr>';
      countryDetailsBody.innerHTML += row;
    });
    document.getElementById('countryDetails').style.display = 'block';
  }

  function displayContinentSummary(data) {
    const continentData = {};
    data.forEach(country => {
      const continent = country.region;
      if (!continentData[continent]) {
        continentData[continent] = 1;
      } else {
        continentData[continent]++;
      }
    });

    const continentTableBody = document.getElementById('continentTableBody');
    continentTableBody.innerHTML = '';
    Object.keys(continentData).forEach(continent => {
      const row = '<tr><td>' + continent + '</td><td>' + continentData[continent] + '</td></tr>';
      continentTableBody.innerHTML += row;
    });
    document.getElementById('continentTable').style.display = 'block';
  }