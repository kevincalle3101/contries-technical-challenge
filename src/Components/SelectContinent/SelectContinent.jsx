import React, { useState, useEffect, useRef } from 'react';
import styles from '../SelectContinent/SelectContinent.module.css'

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
        }, [setterContinent, arrayContinents])
        console.log("Array of continents:", arrayContinents);

        
    return (
        <div  ref={containerRef} className={styles.principalContainer}>
            <div className={styles.containerHeader}>
                <p className={styles.labelFilter}>Filtrar por continentes</p>
                <button className={styles.buttonClear} onClick={clearContinents}>Limpiar</button>
            </div>
            <div className={styles.containerContinents}>
                <div>
                    <button onClick={()=>handleSelectContinents('europe')} >
                        <img src={'./europeMap.webp'} alt='europa' className={styles.img} />
                    </button>
                    <label className={styles.label}>Europa</label>
                </div>
                <div>
                    <button onClick={()=>handleSelectContinents('north america')}>
                        <img src={'./northAmericaMap.webp'} alt='north america' className={styles.img} />
                    </button>
                    <label className={styles.label}>North America</label>
                </div>
                <div>
                    <button onClick={()=>handleSelectContinents('south america')}>
                        <img src={'./southAmericaMap.webp'} alt='south america' className={styles.img} />
                    </button>
                    <label className={styles.label}>South America</label>
                </div>
                <div>
                    <button onClick={()=>handleSelectContinents('asia')}>
                        <img src={'./asiaMap.webp'} alt={'asia'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Asia</label>
                </div>
                <div>
                    <button onClick={()=>handleSelectContinents('oceania')}>
                        <img src={'./oceaniaMap.webp'} alt={'oceania'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Oceania</label>
                </div>
                <div>
                    <button onClick={()=>handleSelectContinents('africa')}>
                        <img src={'./africaMap.webp'} alt={'africa'} className={styles.img} />
                    </button>
                    <label className={styles.label}>Africa</label>
                </div>
            </div>
        </div>
    )
}

export default SelectContinent