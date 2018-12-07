import React, {Component} from 'react';
import InfoUserComponent from './InfoUserComponent'
import ModalUpdateComponent from './ModalUpdateComponent'
import pinDrop from '../img/pin_drop_black.png';
import calendar from '../img/calendar_black.png'
import edit from '../img/edit.png';

export default class UserComponent extends Component{

    render(){
        return (
        <div className="App-Dados App-card App-column" style={{padding:'1%', textAlign:'left'}}>

            <div className="App-row" style={{justifyContent:'space-between'}}>
                <span style={{fontWeight: '600', fontSize: '25px'}}>{this.props.name}</span>
                <img onClick={this.props.openModal} style={{width:'25px', height:'25px', cursor:'pointer'}} src={edit} alt="edit"/>
            </div>

            <span>@jucastanha</span>

            <InfoUserComponent icon={pinDrop} label={this.props.data.city}/>
            <InfoUserComponent icon={calendar} label={this.props.data.begin}/>
            <ModalUpdateComponent {...this.props} />
        </div>
        )
    }
}