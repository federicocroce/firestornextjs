import { useState, useEffect } from 'react'

import { db, formattedData, onSnapshot } from 'config/firebase/firestore.methods';
// import { formattedData, onSnapshot, db } from '../config/firebase/firestore.methods';


export const useOnSnapShotData = (initialData, formattedDataCbk = formattedData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    onSnapshot(db.collection(data.path), (newData) => {
      const formattedDataResponse = formattedDataCbk(newData);
      setData(formattedDataResponse)
    });
  }, [])
  return [data];
}