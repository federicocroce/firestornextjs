import { useState, useEffect } from 'react';
import Header from '../components/Header'
import {fetch} from '../_config/controller/controller'

export default function fetchLazy() {
  const [data, setData] = useState({});

   useEffect(() => {
    ( async () => {
      const unsubscribe = await fetch('test', setData);
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