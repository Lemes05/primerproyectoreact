import { Component, component } from 'react'
import Boton from './Boton';
export default class Contador extends Component{
  constructor(props){
    super(props)
    this.state = {valor: 0}
  }

  restar(){
    this.serState({valor: this.state.valor - 1})
  }
  sumar(){
    this.serState({valor: this.state.valor + 1})
  }
  render(){
    return(
      <div className='Contador'>
        <span className='Titulo'>{this.props.children}</span> 
        <span className='Valor'>{this.state.valor}</span>
        <div className='Botonera'>
          <Boton
          accion={() => this.restar()}
          />
          <Boton
          accion={() => this.sumar()}
          />
        </div>

      </div>
    )
  }
}