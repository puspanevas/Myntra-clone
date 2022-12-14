import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import Home from './Home';
import { Shirts } from './Shirts';
import {SideBar} from './SideBar/SideBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shirts' element={<Shirts />}/>
        </Routes> 
        <SideBar />

      </div>
    </Router>
  );
}

export default App;
