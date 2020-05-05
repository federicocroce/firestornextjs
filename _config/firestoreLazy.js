export default async function firestoreLazy() {
  const firebase = require('firebase/app')
  require('firebase/firestore')

  const firestore = {}

  try {
    firebase.initializeApp({
      apiKey: 'AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM',
      authDomain: 'test-74eeb.firebaseapp.com',
      databaseURL: 'https://test-74eeb.firebaseio.com',
      projectId: 'test-74eeb',
      storageBucket: 'test-74eeb.appspot.com',
      messagingSenderId: '984496005171',
      appId: '1:984496005171:web:1223101227209a12284346',
      measurementId: 'G-H81H426MJZ'
    })
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error raised', err.stack)
    }
  }

  const db = firebase.firestore();

  firestore.get = async (collection) => {
    const snapshot = await db.collection(collection).get()
    const data = {}
    snapshot.docs.map(doc => {
      Object.assign(data, {
        [doc.id]: doc.data()
      });
    });
    return data;
  }
  
  firestore.fetch = async (collection, setData) => {
    db.collection(collection).onSnapshot(snapshot => {
      const data = {}
      snapshot.docs.map(doc => {
        Object.assign(data, {
          [doc.id]: doc.data()
        });
      });
      console.log(data);
      setData(data);
    });
  }

  return firestore;
}
