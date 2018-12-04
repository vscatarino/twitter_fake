import React, { Component } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import ScoreComponent from "./components/ScoreComponent";
import TimelineComponent from "./components/TimelineComponent";
import TweetComponent from "./components/TweetComponent";

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
                   <TweetComponent/>

                   <div className="App-Post App-card" style={{marginBottom:'20px', paddingBottom:'10px'}}>
                       <TimelineComponent
                        avatar="https://i.pinimg.com/originals/ae/19/04/ae1904b8ec612779a45d5d2b091140ea.jpg"
                        login="@jucastanha"
                        data="05 de dez de 2018"
                        post="Here's Picard showing the 300 frames of animations I did for nearly 100 characters for Trexels 2."
                       />

                       <TimelineComponent
                        avatar="https://avatars1.githubusercontent.com/u/150330?s=460&v=4"
                        login="@learnjs"
                        data="04 de dez de 2018"
                        post="Here's Picard showing the 300 frames of animations I did for nearly 100 characters for Trexels 2."
                       />

                       <TimelineComponent
                        avatar="https://pbs.twimg.com/profile_images/378800000176427555/a79bf7992c8b3c21a25024dcda0db0af_400x400.jpeg"
                        login="@richman"
                        data="04 de dez de 2018"
                        post="Here's Picard showing the 300 frames of animations I did for nearly 100 characters for Trexels 2."
                       />
                   </div>
               </div>

          </div>



      </div>
    );
  }
}

export default App;
