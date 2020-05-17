// import firestoreLazy from '../_config/firestoreLazy';
import firestorWorker from "../_config/firestore.worker.js";
const collection = 'test';
let path = `db.collection('${collection}')`;


// export const fetch = async (collection, setData) => {
//   const {fetch} = await firestoreLazy();
//   return fetch(collection, formatFetchTata(setData));
// }


const formatFetchTata = (setData) => (data) => {
  setData({ ...data, apellido: 'sarasa' });
}


export const fetch = async (setData) => {
  const worker = new firestorWorker();
  worker.postMessage({ cmd: 'onSnapshot', path})
  worker.addEventListener('message', ({data}) => setData(data.response.data.docs))
}