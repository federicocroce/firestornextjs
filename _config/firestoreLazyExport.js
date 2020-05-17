

export default async function firestoreLazy() {
  const firebase = require('firebase/app')
  require('firebase/firestore')

  const firestore = {}

  try {
    firebase.initializeApp({
      apiKey: "AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM",
      authDomain: "test-74eeb.firebaseapp.com",
      databaseURL: "https://test-74eeb.firebaseio.com",
      projectId: "test-74eeb",
      storageBucket: "test-74eeb.appspot.com",
      messagingSenderId: "984496005171"
    })
  } catch (err) {
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
    return db.collection(collection).onSnapshot(snapshot => {
      const data = {}
      snapshot.docs.map(doc => {
        Object.assign(data, {
          [doc.id]: doc.data()
        });
      });
      console.log(data);
      setData && setData(data);
    });
  }

  return db;
}
