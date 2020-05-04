import * as firebase from 'firebase/app';
import 'firebase/firestore'


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

const db = firebase.firestore()

self.addEventListener(
  "message",
  event => {
    console.log(event);
    console.log(db);
    switch (event.data.cmd) {
      case "onSnapshot": {
        const { collection } = event.data;
        db.collection(collection).onSnapshot(snap => {
          const docs = {}
          snap.docs.map(doc => {
            Object.assign(docs, {
              [doc.id]: doc.data()
            });
          });
          console.log(docs);
          const size = snap.size;
          const empty = snap.empty;
          self.postMessage({
            name: `${collection}`,
            response: {
              data: { docs, size, empty },
              type: "QuerySnapshot"
            }
          });
        });
        break;
      }
    }
  },
  false
);