import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPhShCb-Bay6mDR2jYvT8b8Ed1XdFYUN4",
    authDomain: "pointscounter-ab013.firebaseapp.com",
    projectId: "pointscounter-ab013",
    storageBucket: "pointscounter-ab013.appspot.com",
    messagingSenderId: "965474937044",
    appId: "1:965474937044:web:49101e6fd27873710eb341",
    measurementId: "G-11JRD2E2GE",
    databaseURL: "https://pointscounter-ab013-default-rtdb.europe-west1.firebasedatabase.app",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
