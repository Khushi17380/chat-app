import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const config={
  apiKey: "AIzaSyDeU2eO233W6NtXVCohAKk5g5iPYdtgU0Y",
  authDomain: "chat-web-app-7b174.firebaseapp.com",
  projectId: "chat-web-app-7b174",
  storageBucket: "chat-web-app-7b174.appspot.com",
  messagingSenderId: "969066434885",
  appId: "1:969066434885:web:4d14695b9dfa03192fee2c"
};

const app=firebase.initializeApp(config);
export const auth=app.auth();
export const database=app.database();
