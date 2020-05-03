import Header from '../components/Header'

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








// import * as firebaseApp from 'firebase'

// const firebaseConfig = {
//   apiKey: 'AIzaSyDINSbmIwTdqRE7yDhkow46fs3JxW5y8KM',
//   authDomain: 'test-74eeb.firebaseapp.com',
//   databaseURL: 'https://test-74eeb.firebaseio.com',
//   projectId: 'test-74eeb',
//   storageBucket: 'test-74eeb.appspot.com',
//   messagingSenderId: '984496005171',
//   appId: '1:984496005171:web:1223101227209a12284346',
//   measurementId: 'G-H81H426MJZ'
// }

// firebaseApp.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

// const get = () => db.collection("test").get().then((querySnapshot) => {
//   return querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     return doc.id;
//   });
// })



export default function About({ data }) {
  return (
    <div>
      <Header />
      <p>This is the about page</p>
      <p>{Object.keys(data).map(key => data[key].data)}</p>
    </div>
  )
}

// const getData = async () => {
//   console.log('1');
//   await sleep(5000)
//   console.log('2');
//   return "Fede Croce"
// };

// export async function getServerSideProps() {
//   const data = await getTest()

//     console.log('getStaticProps', data);

//     return {
//       props: {
//         data: !data ? "DATA False" : data,
//       },
//     }

// }


const get = async () => {
  const snapshot = await db.collection('test').get()
  const data = {}
  snapshot.docs.map(doc => {
    Object.assign(data, {
      [doc.id]: doc.data()
    });
  });
  return data;
}


export async function getStaticProps() {

  const data = await get()
  console.log(data);

  return {
    props: {
      data: !data ? "DATA False" : data,
    },
  }
}
// export async function getStaticProps() {
//   const data = {}
//   const snapshot = await db.collection('test').get()
//   snapshot.docs.map(doc => {
//     doc.data()
//     Object.assign(data, {
//       [doc.id]: doc.data()
//     });
//   });
//   console.log(data);

//   return {
//     props: {
//       data: !data ? "DATA False" : data,
//     },
//   }
// }

// const getTest =  () => new Promise(function (resolve, reject) {
//   db.collection("test").onSnapshot(querySnapshot => {
//     console.log("getTest2");
//     var data = [];
//     querySnapshot.forEach(function (doc) {
//       data.push(doc.data().data);
//     });
//     console.log("getTest3");
//     console.log(data);
//     // return data;
//     console.log("getTest4");
//     resolve(data);
//   });
// });


// const getTest = async () =>  db.collection("test").onSnapshot(querySnapshot => {
//     console.log("getTest2");
//     var data = [];
//     querySnapshot.forEach(function (doc) {
//       data.push(doc.data().data);
//     });
//     console.log("getTest3");
//     console.log(data);
//     // return data;
//     console.log("getTest4");
//     return data;
//   });


// const snapshot = await db.collection('test').get()
// snapshot.docs.map(doc => {
//   doc.data()
//   Object.assign(payload, {
//     [doc.id]: doc.data()
//   });
// });

//   return payload




const getTestFormattedFucniona = async () => {
  let payload = {};
  const snapshot = await db.collection('test').get()
  snapshot.docs.map(doc => {
    doc.data()
    Object.assign(payload, {
      [doc.id]: doc.data()
    });
  });

  return payload

}
// const getTestFormattedFucniona = async () => {
//   let payload = {};
//   const snapshot = await db.collection('test').get()
//   snapshot.docs.map(doc => {
//     doc.data()
//     Object.assign(payload, {
//       [doc.id]: doc.data()
//     });
//   });

//   return payload

// }


const getTestFUnciona = async () => {
  const snapshot = await db.collection('test').get()
  console.log(snapshot.docs);
  return snapshot.docs.map(doc => doc.data());
}




// const getTestSnapshot = async () => {
//   const res = await db.collection("test")
//   let result = {};
//   res.onSnapshot(function (snapshot) {

//     snapshot.docChanges().forEach((change) => {

//       Object.assign(result, {
//         [change.doc.id]: change.doc.data()
//       });
//     });
//     console.log('getTestSnapshot', result);
//     return result;
//   })
// }



// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// export async function getStaticProps() {

//   let data = await db.collection("test").onSnapshot(snapshot => {
//     const payload = {};
//     console.log("1");
//     snapshot.docChanges().forEach((change) => {
//       console.log("2");
//         Object.assign(payload, {
//             [change.doc.id]: change.doc.data()
//         });
//       console.log('payload2', payload);
//     });
//     console.log("3");
//     console.log('payload3', payload);

//     return JSON.stringify(payload);

// });

// // let data = await (async () => {
// //   sleep(5000)
// //   return "Fede"
// // })();

//   // const data = {data: "DATA"}
//   console.log("4");

//   console.log('data CLG', data);

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data: !data ? "DATA False" : data,
//     },
//   }
// }

const sleep = (ms, nombre) => new Promise(res => setTimeout(res, ms, nombre));