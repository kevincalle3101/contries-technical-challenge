import CountryCard from '../CountryCard/CountryCard';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';



const Home = () => {
  const pixabayApiKey = import.meta.env.VITE_PIXABAY_API_KEY;
  const [countriesResult, setCountriesResult] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [resultcountriesFiltered, setResultCountriesFiltered] = useState([]);
  const [imagesCountries, setImagesCountries] = useState({});
  const GET_COUNTRIES = gql`
  query {
    countries {
      name
      continent{
        name
      }
      capital
      languages{
        name
      }
      currency
      states {
        name
      }
    }
  }
`;
  const { data } = useQuery(GET_COUNTRIES);
  useEffect(() => {
    if (data && data.countries) {
      setCountriesResult(data.countries);
      setResultCountriesFiltered(data.countries)
    }
  }, [data]);
  useEffect(() => {
    const fetchCountries = async () => {
      if (data && data.countries) {
        let imagesCountries = {};
        for (const country of data.countries) {
          const { data } = await axios(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${country.name}&image_type=photo`);
          imagesCountries[country.name] = data.hits[1]?.webformatURL;
        }

        setImagesCountries(imagesCountries);
      }
    }
    fetchCountries()
  }, [data]);
  const searchCountry = (searchCountryByName) => {
    if (searchCountryByName) {
      const countriesFiltered = countriesResult.filter((country) => country.name.toLowerCase().includes(searchCountryByName.toLowerCase()))
      setResultCountriesFiltered(countriesFiltered)
    } else {
      setResultCountriesFiltered(countriesResult)
    }
    setSelectedCountry(null);
  }
  const filterByContinent = (arrayContinents) => {
    if (arrayContinents.length > 0) {
      const countriesFilteredByContinent = countriesResult.filter((country) => arrayContinents.includes(country.continent.name.toLowerCase()))
      setResultCountriesFiltered(countriesFilteredByContinent);
    }
    setSelectedCountry(null);
  };
  console.log("selectedCountry", selectedCountry)

  return (
    <div className={styles.principalContainer}>
      <SearchBar searchCountry={searchCountry} filterByContinent={filterByContinent} />
      <div className={styles.secondarycontainer}>
        <div className={styles.containerCards}>
          {resultcountriesFiltered?.map((country) => (
            <CountryCard key={country.name} country={country} image={imagesCountries[country.name]} onClick={() => setSelectedCountry(country)} />
          ))
          }
        </div>
          {
            selectedCountry &&
            <CountryDetail countryDetail={selectedCountry} image={imagesCountries[selectedCountry.name]} setSelectedCountry={setSelectedCountry} />
          }
      </div>
    </div>
  )
}

export default Home