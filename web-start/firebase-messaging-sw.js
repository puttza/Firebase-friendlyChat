importScripts('https://www.gstatic.com/firebasejs/3.6.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.6/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: '1099469579269'
});
var messaging = firebase.messaging();

//messaging.setBackgroundMessageHandler(function(payload) {
//    console.log('[firebase-messaging-sw.js] Received background message ', payload);
//
//    const notificationTitle = 'Background Message Title';
//    const notificationOptions = {
//        body: 'Background Message body.',
//        icon: '/firebase-logo.png'
//    };
//
//    return self.registration.showNotification(notificationTitle, notificationOptions);
//});
