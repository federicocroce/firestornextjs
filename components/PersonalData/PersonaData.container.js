import { useState, useEffect } from 'react';
import firestoreLazy from '../../_config/firestoreLazy';
import  styles from './PersonalData.module.scss';

export default function PersonaDataContainer() {
  const [personalData, setPersonalData] = useState({});

   useEffect(() => {
    ( async () => {
      const {fetch} = await firestoreLazy();
      const unsubscribe = fetch('personalData', setPersonalData);
    })();

    return () => {
      // unsubscribe();
    }
  }, []);
  console.log(personalData);
  return (
    <div className={styles.container}>
      <p>This is the about page v1</p>
      <p>{Object.keys(personalData).map(key => personalData[key].mainData.height)}</p>
    </div>
  )
}