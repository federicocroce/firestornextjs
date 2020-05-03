import firebase from 'firebase';

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

const firebaseApp = firebase;

const db = firebaseApp.firestore()

// export const get = async () => {
//   console.log("G 1");
//   return db.collection("test").get().then((querySnapshot) => {
//     console.log("G 2");
//     return querySnapshot.forEach((doc) => {
//       console.log("G 3");
//       console.log(`${doc.id} => ${doc.data()}`);
//       return "Fede"
//     });
//   })
// };

export const get2 = async () => {
  console.log("G 1");
  const res = await db.collection("test").get()
  res.then((querySnapshot) => {
    console.log("G 2");
    const data = {};
    querySnapshot.forEach((doc) => {
      console.log("G 3");
      console.log(`${doc.id} => ${doc.data()}`);
      data = doc.data();
    });
    console.log("G 4");
  })
};

export const getB = async () => {
  try {
    console.log('getB1');
    const data = await get2();
    console.log('getB2', data);
    // return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    // return res.status(500).json({ error })
  }
}

export const test = async () => {
  // console.log('TEST')
  return {
    data: 'DATA',
  }
}

export const get = async () => {
  const snapshot = await db.collection('test').get()
  const data = {}
  snapshot.docs.map(doc => {
    Object.assign(data, {
      [doc.id]: doc.data()
    });
  });
  return data;
}

export const fetch = async (collection, setData) => {
  db.collection(collection).onSnapshot(querySnapshot => {
    var data = [];
    querySnapshot.forEach(function (doc) {
      data.push(doc.data().data);
    });
    console.log(data);
    setData(data);
  });
}
