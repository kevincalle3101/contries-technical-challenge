import styles from './CountryCard.module.css';

const CountryCard = ({ country, image, onClick }) => {
  const handleClick = () => {
    onClick(country);
  }
  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <img src={image} alt={country.name} className={styles.img} />
      <div className={styles.titleContainer}>
        <h2 className={styles.name}>{country.name}</h2>
        <p className={styles.continent}>{country.continent.name}</p>
      </div>
    </div>
  );
};

export default CountryCard;