import { useState, useEffect } from 'react';
import Header from '../components/Header'
import firestoreLazy from '../_config/firestoreLazy'

export default function fetchLazy() {
  const [data, setData] = useState({});

   useEffect(() => {
    ( async () => {
      const {fetch} = await firestoreLazy();
      const unsubscribe = fetch('test', setData);
    })();

    return () => {
      // unsubscribe();
    }
  }, []);

  return (
    <div>
      <Header />
      <p>This is the about page v1</p>
      <p>{Object.keys(data).map(key => data[key].data)}</p>
    </div>
  )
}