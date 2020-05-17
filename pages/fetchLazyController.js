import { useState, useEffect } from 'react';
import Header from '../components/Header'
// import firestoreLazy from '../_config/firestoreLazy'
import {fetchC} from '../controllers/controller';

export default function fetchLazy() {
  const [data, setData] = useState({});

   useEffect(() => {
    let unsubscribe = null;
    ( async () => {
      // const {fetch} = await firestoreLazy();
      unsubscribe = fetchC(setData);
    })();

    return () => {
      // unsubscribe();
    }
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <p>This is the about page v1</p>
      <p>{Object.keys(data).map(key => data[key].data)}</p>
    </div>
  )
}