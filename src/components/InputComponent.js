import React, {Component} from 'react'

export default class InputComponent extends Component{
    render(){
        return(
            <div className="App-column" style={{padding:'5px'}}>
                <label>{this.props.label}</label>
                <input
                    type="text"
                    onChange={this.props.onchange}
                    value={this.props.value}/>
            </div>
        )
    }
}