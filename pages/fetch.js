import { useState, useEffect } from 'react';
import Header from '../components/Header'
import { fetch } from '../_config/firestor'

export default function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    const unsubscribe = fetch('test', setData);
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