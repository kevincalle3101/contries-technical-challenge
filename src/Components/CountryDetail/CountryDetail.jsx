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
        <ClearIcon className={styles} />
      </button>
      <img src={image} alt={countryDetail.name} className={styles.img} />
      <div className={styles.titleContainer}>
        <h2 className={styles.name}>{countryDetail.name}</h2>
        <h3 className={styles.continent}>{countryDetail.continent.name}</h3>
      </div>
      <p>Capital: {countryDetail.capital}</p>
      <p>Lenguajes: {countryDetail.languages.map(lang => lang.name).join(', ')}</p>
      <p>Moneda: {countryDetail.currency}</p>
      <div className={styles.containerOfStates}>
        <span>Estados:</span>{
          countryDetail.states.length > 0 ? (
            <div className={styles.containerStates}>
              <ul>
                {countryDetail.states.map(state => (
                  <li key={state.name} className={styles.li}>{state.name}</li>
                ))}
              </ul>
            </div>) : 
            (
            <span className={styles.prontoFrase}>Muy pronto</span>
            )}
      </div>
    </div>
  )
}

export default CountryDetail