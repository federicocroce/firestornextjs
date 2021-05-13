self.addEventListener('message', (event) => {
  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
  console.log('Worker received:', event.data)
})

self.postMessage('from Worker')

let count = 0;
// sent a message to the main thread every second!
// Hey, this is kinda like syncing data from Firestore 🤔
// setInterval(() => {
//   count = count + 1;
//   // send message to main thread
//   self.postMessage({ event: "count", count });
// }, 1000);