import React, {Component} from 'react';
import InfoUserComponent from './InfoUserComponent'
import pinDrop from '../img/pin_drop_black.png';
import calendar from '../img/calendar_black.png'

export default class UserComponent extends Component{
    render(){
        return (
        <div className="App-Dados App-card App-column" style={{padding:'1%', textAlign:'left'}}>

            <span style={{fontWeight: '600', fontSize: '25px'}}>{this.props.name}</span>
            <span>@jucastanha</span>

            <InfoUserComponent icon={pinDrop} label="Ladário"/>
            <InfoUserComponent icon={calendar} label="Participa desde dezembro de 2016"/>

        </div>
        )
    }
}