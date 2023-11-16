import React from 'react'
import styles from './CountryDetail.module.css'
import ClearIcon from "@mui/icons-material/Clear";


const CountryDetail = ({ countryDetail, image, setSelectedCountry }) => {
  if (!countryDetail) {
    return null
  };
  console.log("countryDetail", countryDetail);

  return (
    <div className={styles.principalContainer}>
          <button className={styles.botonCerrar} onClick={() => setSelectedCountry(null)}>
            <ClearIcon className={styles.arrow} />
          </button>
          <img src={image} alt={countryDetail.name} className={styles.img} />
          <div className={styles.titleContainer}>
            <h2 className={styles.name}>{countryDetail.name}</h2>
            <h3 className={styles.continent}>{countryDetail.continent.name}</h3>
          </div>
          <p>Capital: {countryDetail.capital}</p>
          <p>Languages: {countryDetail.languages.map(lang => lang.name).join(', ')}</p>
          <p>Currency: {countryDetail.currency}</p>
          <p>States: {countryDetail.states.map(state => state.name).join(', ')}</p>
        </div>
  )
}

export default CountryDetail