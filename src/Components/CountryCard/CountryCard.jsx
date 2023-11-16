import styles from './CountryCard.module.css';

const CountryCard = ({ country, image }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={country.name} className={styles.img} />
      <div className={styles.titleContainer}>
        <h2 className={styles.name}>{country.name}</h2>
        <p className={styles.continent}>{country.continent.name}</p>
      </div>
    </div>
  );
};

export default CountryCard;