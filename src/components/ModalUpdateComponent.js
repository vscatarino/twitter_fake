import React, {Component} from 'react'
import close from '../img/close.svg';
import InputComponent from './InputComponent'

export default class ModalUpdateComponent extends Component{

    render(){
        return(
            <div id="myModal" className={`modal ${this.props.modalIsOpen ? '' : 'l-hide'}`}>
                <div className="modal-content">
                    <div className = "App-row" style={{ justifyContent: 'space-between' }}>
                        <h1 style={{fontSize:'20px'}}>Editar</h1>
                        <img onClick={this.props.closeModal} className="App-close" src={close} alt=""/>
                    </div>
                    <form onSubmit={this.props.changeInfo}>
                        <InputComponent
                            label='URL foto perfil'
                            onchange={this.props.photoChange}
                            value={this.props.valueUrlPhoto}
                        />

                        <InputComponent
                            label='URL foto capa'
                            onchange={this.props.coverChange}
                            value={this.props.valueUrlCover}
                        />

                        <InputComponent
                            label='Nome'
                            onchange={this.props.nameChange}
                            value={this.props.valueName}
                        />

                        <button type="submit" className="App-button-display App-buttonII">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}