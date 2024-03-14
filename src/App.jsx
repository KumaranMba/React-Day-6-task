import React from 'react';
import {Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import All from './assets/Components/All';
import Stackdevelopment from './assets/Components/Stackdevelopment';
import Datascience from './assets/Components/Datascience';
import Cybersecurity from './assets/Components/Cybersecurity';
import Career from './assets/Components/Career';

function App() {

  const styles ={
       padding:10,
        color:"black"
  }

  return (
    <Router>
      <div className="container">
          <h2>Blog</h2>
          <div className ="columns mt-3 d-flex justify-content-center" >
          <Link to={"/"} style={styles} >ALL</Link>
          <Link to={"/fullStackDevelopment"} style={styles} >FULL STACK DEVELOPMENT</Link>
          <Link to={"/dataScience"} style={styles} >DATA SCIENCE</Link>
          <Link to={"/cyberSecurity"} style={styles} >CYBER SECURITY</Link>
          <Link to={"/career"} style={styles} >CAREER</Link>
          </div>
      </div>
      <Routes>
        <Route path={"/"} element={<All/>}/>
        <Route path={"/fullStackDevelopment"} element={<Stackdevelopment/>}/>
        <Route path={"/dataScience"} element={<Datascience/>}/>
        <Route path={"/cyberSecurity"} element ={<Cybersecurity />}/>
        <Route path={"/career"} element={<Career/>}/>
      </Routes>
    </Router>
  )
}

export default App;
