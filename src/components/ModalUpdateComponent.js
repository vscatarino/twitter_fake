import React, {Component} from 'react'
import close from '../img/close.svg';

export default class ModalUpdateComponent extends Component{
    changeInfo(e){
        e.preventDefault();
        console.log('nome: ', this.name.value)
        console.log('url_perfil: ', this.url_perfil.value)
        console.log('url_cover: ', this.url_cover.value)
    }
    render(){
        return(
            <div id="myModal" className={`modal ${this.props.modalIsOpen ? '' : 'l-hide'}`}>
                <div className="modal-content">
                    <div className = "App-row" style={{ justifyContent: 'space-between' }}>
                        <h1 style={{fontSize:'20px'}}>Editar</h1>
                        <img onClick={this.props.onClose} className="App-close" src={close} alt=""/>
                    </div>
                    <form onSubmit={this.changeInfo.bind(this)}>
                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto perfil</label>
                            <input type="text" ref={(input =>this.url_perfil = input)}/>
                        </div>

                        <div className="App-column" style={{padding:'5px'}}>
                            <label>URL foto capa</label>
                            <input type="text" ref={(input =>this.url_cover = input)}/>
                        </div>

                        <div className="App-column"style={{padding:'5px'}}>
                            <label>Nome</label>
                            <input type="text" ref={(input =>this.name = input)}/>
                        </div>

                        <button type="submit" className="App-buttonII">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}