
import firestorWorker from "../firestore.worker";

export const fetch = async (path, setData) => {
  const worker = new firestorWorker();
  worker.postMessage({ cmd: 'onSnapshot', path})
  worker.addEventListener('message', ({data}) => setData(data.response.data.docs))
}