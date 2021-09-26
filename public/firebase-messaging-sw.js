/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyDeU2eO233W6NtXVCohAKk5g5iPYdtgU0Y",
  authDomain: "chat-web-app-7b174.firebaseapp.com",
  projectId: "chat-web-app-7b174",
  storageBucket: "chat-web-app-7b174.appspot.com",
  messagingSenderId: "969066434885",
  appId: "1:969066434885:web:4d14695b9dfa03192fee2c"
});

firebase.messaging();