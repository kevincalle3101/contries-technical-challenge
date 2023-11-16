import React from 'react'
import styles from './CountryDetail.module.css'

const CountryDetail = ({ countryDetail, imageCountry }) => {
  if (!countryDetail) {
    return null
  };

  return (
    <div>
      <img src={imageCountry} alt={countryDetail.name} className={styles.img} />
      <div className={styles.titleContainer}>
        <h2 className={styles.name}>{countryDetail.name}</h2>
        <p className={styles.continent}>{countryDetail.continent.name}</p>
      </div>
      <p>Capital: {countryDetail.capital}</p>
      <p>Languages: {countryDetail.languages.map(lang => lang.name).join(', ')}</p>
      <p>Currency: {countryDetail.currency}</p>
      <p>States: {countryDetail.states.map(state => state.name).join(', ')}</p>
    </div>
  )
}

export default CountryDetail