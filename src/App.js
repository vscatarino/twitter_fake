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
        this.state = {
            inputValue:'',
            urlPhotoValue:'',
            urlCoverValue:'',
            name:'',
            modalIsOpen:false
        }
    }

    componentDidMount(){
        this.props.fetchActiveApi();

    }

    componentDidUpdate(prevProps) {
        let only = !this.props.api.isFetching && this.props.api.lastRespOk
        if ((prevProps.api !== this.props.api) && only) {
           this.props.update_user_name(this.props.api.user_data.name)
           this.props.update_user_photo(this.props.api.user_data.url_photo)
           this.props.update_user_cover(this.props.api.user_data.cover_photo)
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

    // open Modal
    onOpen(){
        this.setState({modalIsOpen:true})
    }

    // close Modal
    onClose(){
        this.setState({modalIsOpen:false})
    }

    inputChange = event =>{
        this.setState({inputValue:event.target.value})
    }

    photoChange = event =>{
        this.setState({urlPhotoValue:event.target.value})
    }

    coverChange = event =>{
        this.setState({urlCoverValue:event.target.value})
    }

    nameChange = event =>{
        this.setState({name:event.target.value})
    }

    urlIsValid(url){
        let protocol = url.slice(0,4)

        let image_type = url.slice(-3)

        return protocol.toLowerCase() === 'http' && image_type.toLowerCase() === 'jpg'
    }

    changeInfo(e){
        e.preventDefault();

        if(this.state.name) this.props.update_user_name(this.state.name.substr(0,19))

        if(this.state.urlPhotoValue && this.urlIsValid(this.state.urlPhotoValue)){
            this.props.update_user_photo(this.state.urlPhotoValue)
        }else if(this.state.urlPhotoValue !== ''){
            alert('Digite uma url válida para a foto do perfil!')
        }

        if(this.state.urlCoverValue && this.urlIsValid(this.state.urlCoverValue)){
            this.props.update_user_cover(this.state.urlCoverValue)
        }else if(this.state.urlCoverValue !== ''){
            alert('Digite uma url válida para a foto da capa!')
        }

        this.setState({name:''})
        this.setState({urlCoverValue:''})
        this.setState({urlPhotoValue:''})
        this.onClose()
    }

  render() {
      const { localState, api } = this.props;
    return (
      <div className="App">
        <header className="App-header">
            <img src={localState.cover} alt="photo_cover" style={{height:'100%', width:'100%'}} />
        </header>

        <div className="App-menu">
         <ScoreComponent itens={api.user_data.score || []}/>
        </div>

        <div className="App-moldura">
            <img className="App-foto-perfil" src={localState.photo} alt="photo_user" />
        </div>

          <div className="App-row">
              <UserComponent
                  name={localState.name}
                  data={api.user_data}
                  openModal = {this.onOpen.bind(this)}
                  closeModal= {this.onClose.bind(this)}
                  modalIsOpen = {this.state.modalIsOpen}
                  photoChange = {this.photoChange}
                  coverChange = {this.coverChange}
                  nameChange = {this.nameChange}
                  valueName = {this.state.name}
                  valueUrlPhoto = {this.state.urlPhotoValue}
                  valueUrlCover = {this.state.urlCoverValue}
                  changeInfo = {this.changeInfo.bind(this)}
              />

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

