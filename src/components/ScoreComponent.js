import React, {Component} from 'react'

export default class ScoreComponent extends Component{

    render(){
        return(
            <div className="App-row" style={{marginLeft:'14%', justifyContent: 'space-around'}}>
                {
                    this.props.itens.map((item, index) =>{
                        return(
                            <div key={index} className="App-column">
                                <label style={{fontWeight:'600'}}>{item.label}</label>
                                <span>{item.number}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}