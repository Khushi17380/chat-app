/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-web-app-7b174-default-rtdb.firebaseio.com"});

const {sendFcm} = require("./src/fcm");
exports.sendFcm = sendFcm;
