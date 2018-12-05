import React, {Component} from 'react'
import close from '../img/close.svg';

export default class ModalUpdateComponent extends Component{
    render(){
        return(
            <div id="myModal" className={`modal ${this.props.modalIsOpen ? '' : 'l-hide'}`}>
                <div className="modal-content">
                    <div className = "App-row" style={{ justifyContent: 'space-between' }}>
                        <h1 style={{fontSize:'20px'}}>Editar</h1>
                        <img onClick={this.props.onClose} className="App-close" src={close} alt=""/>
                    </div>
                    <form>
                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto perfil</label>
                            <input></input>
                        </div>

                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto capa</label>
                            <input></input>
                        </div>

                        <div className="App-column"style={{padding:'5px'}}>
                            <label>Nome</label>
                            <input></input>
                        </div>

                        <button className="App-buttonII">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}