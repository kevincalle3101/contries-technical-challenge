import { useState} from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SelectContinent from '../SelectContinent/SelectContinent';


const SearchBar = ({ searchCountry, filterByContinent }) => {
  const [openFieldContinents, setOpenFieldContinents] = useState(false);
  const [valueInput, setValueInput] = useState('');


  const handleInput = (event) => {
    setValueInput(event.target.value)
    searchCountry(event.target.value)
  }

  const handleInputFocus = () => {
    setOpenFieldContinents(true)
  }
  const setterContinent = (arrayContinents)=>{
    filterByContinent(arrayContinents)
  }

  return (
    <div className={styles.principalContainer}>
      <div className={styles.containerSearchBar}>
        <div className={styles.containerInput}>
          <label htmlFor="search" className={styles.labelInput}>País</label>
          <input type="text" id="search" className={styles.inputSearch} placeholder="Escribe el país que deseas ver"
            onChange={handleInput} onFocus={handleInputFocus} autoComplete="off"/>
        </div>
        <button className={styles.buttonSearch} onClick={() => searchCountry(valueInput)}>
          <SearchIcon />
          Buscar</button>
      </div>
      {openFieldContinents && <SelectContinent setOpenFieldContinents={setOpenFieldContinents} setterContinent={setterContinent}/>}
    </div>
  );
};

export default SearchBar;