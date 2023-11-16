import CountryCard from '../CountryCard/CountryCard';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import { useSelector } from 'react-redux';

const Home = () => {
  const countriesResult = useSelector(state => state.allCountries);
  const countriesResultCopy = useSelector(state => state.allCountries);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [resultcountriesFiltered, setResultCountriesFiltered] = useState(countriesResult);
  useEffect(() => {
    setResultCountriesFiltered(countriesResultCopy);
  }, [countriesResult, countriesResultCopy]);
  const searchCountry = (searchCountryByName) => {
    if(searchCountryByName) {
      const countriesFiltered = countriesResult.filter((country) => country.name.toLowerCase().includes(searchCountryByName.toLowerCase()))
      setResultCountriesFiltered(countriesFiltered)
    } else{
      setResultCountriesFiltered(countriesResultCopy)
    }
    setSelectedCountry(null);
  }
  const filterByContinent = (arrayContinents) => {
    if(arrayContinents.length > 0){
      const countriesFilteredByContinent = countriesResultCopy.filter((country) => arrayContinents.includes(country.continent.name.toLowerCase()))
      setResultCountriesFiltered(countriesFilteredByContinent);
    } else {
      setResultCountriesFiltered(countriesResultCopy);
    }
    setSelectedCountry(null);
  };

  return (
    <div className={styles.principalContainer}>
      <SearchBar searchCountry={searchCountry} filterByContinent={filterByContinent}/>
      <div className={styles.containerCards}>
        {resultcountriesFiltered?.map((country) => (
          <CountryCard key={country.name} country={country} onClick={() => setSelectedCountry(country)} />
        ))
        }
        {
          selectedCountry &&
          <CountryDetail countryDetail={selectedCountry} />
        }
      </div>
    </div>
  )
}

export default Home