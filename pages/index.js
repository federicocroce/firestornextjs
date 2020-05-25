
import { useState, useEffect } from 'react';
import Header from '../components/Header'


import ExampleWorker from "../_config/test.worker.js";

export default function Index() {
  const [data, setData] = useState({});
  
  
  useEffect(() => {
    const worker = new ExampleWorker();
    worker.postMessage('from Host')
    worker.addEventListener('message', onWorkerMessage)

    return () => {
      worker.terminate();
    }
  }, []);

  const onWorkerMessage = (event) => {
    console.log('Host received:', event.data)
    // setData({ latestMessage: event.data })
  }

  return (
    <div>
      <Header/>
      {/* <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p> */}
      <p>Hello test Next.js</p>
     <h1>Message from Worker: {data.latestMessage}</h1>
 
    </div>
  )
}
