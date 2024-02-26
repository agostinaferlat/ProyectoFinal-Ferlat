import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYRukmRPxdsk0KpZ8tfMS3nURR9eP2naU",
  authDomain: "proyectofinal-agostinaferlat.firebaseapp.com",
  projectId: "proyectofinal-agostinaferlat",
  storageBucket: "proyectofinal-agostinaferlat.appspot.com",
  messagingSenderId: "517215621221",
  appId: "1:517215621221:web:3e8f6d0dcee87457def68c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
