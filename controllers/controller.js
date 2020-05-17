// import firestoreLazy from '../_config/firestoreLazy';
import {fetch} from '../_config/controller/controller'
// import firestorWorker from "../_config/firestore.worker.js";
const collection = 'test';
let path = `db.collection('${collection}')`;


export const fetchC = async (setData) => {

  return fetch(path, formatFetchTata(setData));
}


const formatFetchTata = (setData) => (data) => {
  setData({ ...data, apellido: 'sarasa' });
}
