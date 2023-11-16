import React, { useState, useEffect, useRef } from 'react';
import styles from '../SelectContinent/SelectContinent.module.css'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const SelectContinent = ({setOpenFieldContinents, setterContinent}) => {
    const containerRef = useRef(null);
    const [arrayContinents, setArrayContinents] = useState([]);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (containerRef?.current && !containerRef.current.contains(event.target)) {
            setOpenFieldContinents(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      },
       [setOpenFieldContinents]);

       const handleSelectContinents= (continent)=>{
        if (arrayContinents.includes(continent)){
            setArrayContinents(arrayContinents.filter(conti => conti !== continent))
        } else {
            setArrayContinents([...arrayContinents, continent])
        }};
        let clearContinents = ()=>{
            setArrayContinents([])
        }
        useEffect(()=>{
            setterContinent(arrayContinents)
        }, [ arrayContinents ])
        console.log("Array of continents:", arrayContinents);

        
    return (
        <div  ref={containerRef} className={styles.principalContainer}>
            <div className={styles.containerHeader}>
                <p className={styles.labelFilter}>Filtrar por continentes</p>

                <button className={styles.buttonClear} onClick={clearContinents}>
                    <CleaningServicesIcon />
                    Limpiar</button>
            </div>
            <div className={styles.containerContinents}>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('europe')} className={styles.button}>
                        <img src={'./europeMap.webp'} alt='europa' className={styles.img} />
                    </button>
                    <label className={styles.label}>Europa</label>
                </div>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('north america')} className={styles.button}>
                        <img src={'./northAmericaMap.webp'} alt='north america' className={styles.img} />
                    </button>
                    <label className={styles.label}>North America</label>
                </div>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('south america')} className={styles.button}>
                        <img src={'./southAmericaMap.webp'} alt='south america' className={styles.img} />
                    </button>
                    <label className={styles.label}>South America</label>
                </div>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('asia')} className={styles.button}>
                        <img src={'./asiaMap.webp'} alt={'asia'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Asia</label>
                </div>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('oceania')} className={styles.button}>
                        <img src={'./oceaniaMap.webp'} alt={'oceania'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Oceania</label>
                </div>
                <div className={styles.containerOption}>
                    <button onClick={()=>handleSelectContinents('africa')} className={styles.button}>
                        <img src={'./africaMap.webp'} alt={'africa'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Africa</label>
                </div>
            </div>
        </div>
    )
}

export default SelectContinent