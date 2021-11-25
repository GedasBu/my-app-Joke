import Nav from './components/Nav';
import './App.css';
import React from 'react';
import Jokes from './components/Jokes';
import Favorites from './components/Favorites';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

class App extends React.Component {
 render(){
    return (
    <div className="container">
      <Router>
       <Nav/>
       <Routes>
         <Route path="/" element={<Jokes/>}/>
         <Route path="/favorite" element={<Favorites/>}/>
       </Routes>

      </Router>
     
    </div>
  );
 }
 
 
}

export default App;
