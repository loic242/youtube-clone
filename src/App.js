import React from 'react'
import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from './SearchPage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwqHOfgEOOqNNOvKGH53XsmozCek-gDAw",
  authDomain: "clone-73a52.firebaseapp.com",
  projectId: "clone-73a52",
  storageBucket: "clone-73a52.appspot.com",
  messagingSenderId: "461511570196",
  appId: "1:461511570196:web:cd24ecab9c4d4630f14801",
  measurementId: "G-7XQLV0HWLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div className='app'>
      <Router>
       <Header/>
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar/>
              <SearchPage />
             </div>
          </Route>

          <Route path='/'>
            <div className='app__page'>
              <Sidebar/>
              <RecommendedVideo/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;