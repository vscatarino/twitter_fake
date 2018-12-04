import React, {Component} from 'react'

export default class TimelineComponent extends Component{
    render(){
        return(
            <div>
                <div className="App-row" style={{padding:'20px'}}>
                    <img className="App-foto-post" src={this.props.avatar} alt="logo" />
                    <div style={{padding: '12px'}}>
                        <span style={{color:'#657786', fontWeight: '600'}}>{this.props.login}</span> {this.props.data}
                    </div>
                </div>
                <div style={{float:'left', padding:'0px 20px', textAlign:'left'}}>
                    {this.props.post}
                </div>
                <span className='App-line'></span>
            </div>
        )
    }
}