import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHTzdOpbw5EVYzmfrW2C8FtixjZ7YKfMI",
  authDomain: "oceanbasadate.firebaseapp.com",
  databaseURL: "https://oceanbasadate-default-rtdb.firebaseio.com",
  projectId: "oceanbasadate",
  storageBucket: "oceanbasadate.appspot.com",
  messagingSenderId: "945879298326",
  appId: "1:945879298326:web:e1e994b9171835bd276037",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
