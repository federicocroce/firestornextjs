import { useState, useEffect } from 'react';
import Header from '../components/Header'

import firestorWorker from "../_config/firestore.worker.js";

export default function WorkerF() {
  const [data, setData] = useState({});


  useEffect(() => {
    const worker = new firestorWorker();
    worker.postMessage({ cmd: 'onSnapshot', collection: 'test' })
    worker.addEventListener('message', onWorkerMessage)

    return () => {
      worker.terminate();
    }
  }, []);

  const onWorkerMessage = ({ data }) => {
    console.log('Host received:', data)
    const docs = data.response.data.docs;
    setData(docs)
  }

  const renderList = (key) => {
    console.log(data);
    return (
      <div>
        {Object.keys(data).map(key => <p key={key}>{data[key].data}</p>)}
      </div>
    )
  }

  return (
    <div>
      <Header />
      <p>WORKER</p>
      {renderList()}

    </div>
  )
}
