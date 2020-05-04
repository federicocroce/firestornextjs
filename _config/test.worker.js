self.addEventListener('message', (event) => console.log('Worker received:', event.data))
self.postMessage('from Worker')

let count = 0;
// sent a message to the main thread every second!
// Hey, this is kinda like syncing data from Firestore 🤔
setInterval(() => {
  count = count + 1;
  // send message to main thread
  self.postMessage({ event: "count", count });
}, 1000);