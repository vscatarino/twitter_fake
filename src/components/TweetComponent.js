import React, {Component} from 'react';

export default class TweetComponent extends Component{
    render(){
        return(
            <div className="App-twit App-card">
                <form onSubmit={this.props.addTweet} className="App-column" style={{padding:'14px'}}>
                            <textarea style={{marginTop: '3%', width:'680px'}}
                                      onChange={this.props.onChange}
                                      value={this.props.value}
                                      rows="3"
                                      maxLength="200"
                                      placeholder="O que você está pensando?"
                                      required  />
                    <button type="submit" className="App-button-display App-button">Tweetar</button>
                </form>
            </div>
        )
    }
}