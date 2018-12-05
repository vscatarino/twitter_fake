import React, { Component } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import ScoreComponent from "./components/ScoreComponent";
import TimelineComponent from "./components/TimelineComponent";
import TweetComponent from "./components/TweetComponent";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update_user_name, update_user_photo, update_user_cover,update_tweet_list } from './state/actions/local_state_action';
import { fetchActiveApi } from './state/actions/api_actions';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { inputValue:'' }
    }

    componentDidMount(){
        this.props.fetchActiveApi();

    }

    componentDidUpdate(prevProps, prevState) {
        let only = !this.props.api.isFetching && this.props.api.lastRespOk
        if ((prevProps.api !== this.props.api) && only) {
           this.props.update_user_name(this.props.api.user_data.name)
           this.props.update_user_photo(this.props.api.user_data.url_photo)
           this.props.update_tweet_list(this.props.api.user_data.tweets)
        }
    }

    addTweet(e){
        e.preventDefault();
        let tweet = {
            avatar: this.props.api.user_data.url_photo,
            login:  this.props.api.user_data.login,
            date:   "05 de dez de 2018",
            post: this.state.inputValue
        };
       let newTweets = this.props.api.user_data.tweets
       newTweets.unshift(tweet)
       this.props.update_tweet_list(newTweets)
        this.setState({inputValue:''})
    }

    inputChange = event =>{
        this.setState({inputValue:event.target.value})
    }

  render() {
      const { localState, api } = this.props;
      console.log('teste', this.props.api)
    return (
      <div className="App">
        <header className="App-header"></header>

        <div className="App-menu">
         <ScoreComponent itens={api.user_data.score || []}/>
        </div>

        <div className="App-moldura">
            <img className="App-foto-perfil" src={localState.photo} alt="photo_user" />
        </div>

          <div className="App-row">
              <UserComponent name={localState.name} data={api.user_data}/>

               <div className="App-column App-posi">
                   <TweetComponent
                       addTweet={this.addTweet.bind(this)}
                       onChange={this.inputChange}
                       value={this.state.inputValue}
                   />

                   <div className="App-Post App-card" style={{marginBottom:'20px', paddingBottom:'10px'}}>
                       {
                          this.props.localState.tweet_list.map((tweet, index) =>{
                               return(
                                   <TimelineComponent
                                       key={index}
                                       avatar={tweet.avatar}
                                       login={tweet.login}
                                       data={tweet.date}
                                       post={tweet.post}
                                   />
                               )
                           })
                       }
                   </div>
               </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = store =>({
    localState: store.localState,
    api: store.api
   });

const mapDispatchToProps = dispatch =>
    bindActionCreators({update_user_name, update_user_photo, update_user_cover, fetchActiveApi, update_tweet_list}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

