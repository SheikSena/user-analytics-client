import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import React, { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const guestLinks = (
    <>
      <Login />
      {/* <Register /> */}
    </>
  );


  const userLinks = (
    <>
      <Sidebar />
      <Home />
    </>
  );

  return (
    <div>
      <Header />
      {loggedIn ? userLinks : guestLinks}
    </div>
  );
}

export default App;
