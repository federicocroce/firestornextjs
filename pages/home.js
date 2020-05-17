import { useState, useEffect } from 'react';
import Header from '../components/Header'
import firestoreLazy from '../_config/firestoreLazy'

export default function fetchLazy() {
  const [personalData, setPersonalData] = useState({});
  const [estudiesData, setEstudiesData] = useState({});

   useEffect(() => {
    ( async () => {
      const {fetch} = await firestoreLazy();
      const unsubscribe = fetch('personalData', setPersonalData);
      const unsubscribe1 = fetch('estudies', setEstudiesData);
    })();

    return () => {
      // unsubscribe();
    }
  }, []);
  console.log(personalData);
  return (
    <div>
      <Header />
      <p>This is the about page v1</p>
      <p>{Object.keys(personalData).map(key => personalData[key].mainData.height)}</p>
      <p>{Object.keys(estudiesData).map(key => estudiesData[key].details && estudiesData[key].details.institution)}</p>
    </div>
  )
}