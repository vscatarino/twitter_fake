import React, {Component} from 'react'

export default class ScoreComponent extends Component{
    constructor(props){
        super(props);
        this.state = { itens:[{"label":"Tweets", "number":518},
                              {"label":"Seguindo", "number":777},
                              {"label":"Seguidores", "number":181},
                              {"label":"Curtidas", "number":356}] };
    }
    render(){
        return(
            <div className="App-row" style={{marginLeft:'14%', justifyContent: 'space-around'}}>
                {
                    this.state.itens.map(item =>{
                        return(
                            <div className="App-column">
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