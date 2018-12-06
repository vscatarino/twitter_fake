import React, {Component} from 'react'
import close from '../img/close.svg';

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
                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto perfil</label>
                            <input
                                type="text"
                                onChange={this.props.photoChange}
                                value={this.props.valueUrlPhoto}/>
                        </div>

                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto capa</label>
                            <input
                                type="text"
                                onChange={this.props.coverChange}
                                value={this.props.valueUrlCover}
                            />
                        </div>

                        <div className="App-column"style={{padding:'5px'}}>
                            <label>Nome</label>
                            <input
                                type="text"
                                onChange={this.props.nameChange}
                                value={this.props.valueName}
                            />
                        </div>

                        <button type="submit" className="App-buttonII">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}