import React, {Component} from 'react'

export default class InfoUserComponent extends Component{
    render(){
        return(
            <div className="App-row" style={{padding:'10px'}}>
                <img src={this.props.icon} alt="" style={{width:'30px', height:'30px'}}/>
                <div style={{padding:'11px'}}>{this.props.label}</div>
            </div>
        )
    }
}