import { Notification as Toast } from "rsuite";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import {isLocalhost} from './helpers';

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
export const storage=app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BE4OD-N_1Q65KhoAeVhpvd7EzREEZeMjluzOhXYw5Zj-cUEkjOp1nAiQlBIP8D4m8ADABH6TVyrd_nGvgqBfGo4'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}