import React, { Component } from 'react';
import './App.css';

import UserComponent from './components/UserComponent';
import ScoreComponent from "./components/ScoreComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>

        <div className="App-menu">
         <ScoreComponent/>
        </div>

        <div className="App-moldura">
            <img className="App-foto-perfil" src="https://i.pinimg.com/originals/ae/19/04/ae1904b8ec612779a45d5d2b091140ea.jpg" alt="logo" />
        </div>

          <div className="App-row">
              <UserComponent/>

               <div className="App-column App-posi">
                   <div className="App-twit App-card">
                       Twitt
                   </div>
                   <div className="App-Post App-card">
                       Posts
                   </div>
               </div>

          </div>



      </div>
    );
  }
}

export default App;
