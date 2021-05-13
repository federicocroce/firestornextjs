import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");


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

export const db = firebase.firestore();

// const getFirestore = () => {
//   db.collection("estudies").get().then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   });

// }

// export {
//   getFirestore
// }


// export default async function firebaseInit(databaseURL) {

const fb = {}
// let db = null;

// db = await initDatabase(databaseURL);

export const formattedData = ({ elements, path = '' }) => {

  const { generic = null, ...list } = elements;
  return (
    {
      path,
      generic,
      list
    }
  )
}

export const get = async (call, cbk) => {
  try {
    const path = call.path;
    return call.get().then(function (querySnapshot) {
      let res = {
        path,
        elements: {}
      }
      querySnapshot.forEach(function (doc) {
        res.elements = { ...res.elements, [doc.id]: doc.data() }
      });
      const response = !!cbk ? cbk(res) : res;
      return response
    });

  } catch (error) {
    console.log(error);
  }
}

export const onSnapshot = async (call, setData) => {
  const path = call.path;
  try {
    call
      .onSnapshot(function (querySnapshot) {
        let res = {
          path,
          elements: {}
        }
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, " => ", doc.data());
          res.elements = { ...res.elements, [doc.id]: doc.data() }
        });
        !!setData && setData(res);
      });

    //   .onSnapshot(function(snapshot) {
    //     !!setData && setData(snapshot);
    //   }, function(error) {
    //     // ...
    // });
    // .onSnapshot(function (doc) {
    //     var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    //     // console.log(source, " data: ", doc.data());
    //     !!setData && setData(doc.data());
    //   });

    // db.collection("cities").doc("SF")
    // .onSnapshot(function(doc) {
    //     var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    //     console.log(source, " data: ", doc.data());
    // });


    // db.collection(path).get().then(function (querySnapshot) {
    //   let res = {}
    //   querySnapshot.forEach(function (doc) {
    //     console.log(doc.id, " => ", doc.data());
    //     res = {...res, [doc.id]: doc.data()}
    //   });
    //   !!setData && setData(res);
    // });

  } catch (error) {
    console.log(error);
  }
}

// export default fb;
// }