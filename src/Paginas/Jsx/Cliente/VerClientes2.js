import React, { Component } from 'react';



class Componente extends Component{

    constructor(props){
        super(props)
        this.state = {

          
                cliente1:"Tania Rosales" , edadc1:"28",
                cliente2:"Hector Plaza" , edadc2:"37",
                cliente3:"Marisol Sajcap" , edadc3:"44",
                cliente4:"Javier Vidal" , edadc4:"23",
                cliente5:"Victor Mercado" , edadc5:"30",

            
    }
      }
      cnombre = (e) => {
          e.preventDefault(e)
          this.setState((prevState)=>{
              return{
                   nombre : prevState.cliente1= "Stella Navarro", edad : prevState.edadc1="45",
                   nombre1 : prevState.cliente2= "Ariel Navarro", edad1 : prevState.edadc2="19",
                   nombre2 : prevState.cliente3="Joseph Hernández", edad2 : prevState.edadc3="30",
                   nombre3 : prevState.cliente4="April Ascencio", edad3 : prevState.edadc4="28",
                   nombre4 : prevState.cliente5="Adriel Hernández", edad4 : prevState.edadc5="22"

              }
          })
      }

     
      render() {
        return(
            <div class="container">
                  <table>
                  <tr headers = "lista_de_id">  
                  <th><td><strong>NOMBRE</strong></td></th>
                  <th><td><strong>EDAD</strong></td></th>
                  <th><td><strong>CLIENTE</strong></td></th>
                  <th><td><strong>REASIGNAR</strong></td></th>
                  
                                   
                  </tr>
                  <tr >  
                  <td><strong><p class ="">{this.state.cliente1}</p></strong></td>
                  <td><strong><p class ="">{this.state.edadc1}</p></strong></td>
                  <td><strong><p class ="">Pollo Campero</p></strong></td>
                  <td><strong><input type="text"name="nombre"></input></strong></td>
                  <td><strong> </strong></td>
                  </tr>

                  <tr >  
                  <td><strong><p class ="">{this.state.cliente2}</p></strong></td>
                  <td><strong><p class ="">{this.state.edadc2}</p></strong></td>
                  <td><strong><p class ="">Pizza Hut</p></strong></td>
                  <td><strong><input type="text"name="nombre"></input></strong></td>
                  <td><strong> </strong></td>
                  </tr>
                  
                  <tr >  
                  <td><strong><p class ="">{this.state.cliente3}</p></strong></td>
                  <td><strong><p class ="">{this.state.edadc3}</p></strong></td>
                  <td><strong><p class ="">Sweet</p></strong></td>
                  <td><strong><input type="text"name="nombre"></input></strong></td>
                  <td><strong> </strong></td>
                  </tr>
                  
                  <tr >  
                  <td><strong><p class ="">{this.state.cliente4}</p></strong></td>
                  <td><strong><p class ="">{this.state.edadc4}</p></strong></td>
                  <td><strong><p class ="">Shaws</p></strong></td>
                  <td><strong><input type="text"name="nombre"></input></strong></td>
                  <td><strong> </strong></td>
                  </tr>
                  <tr >  
                  <td><strong><p class ="">{this.state.cliente5}</p></strong></td>
                  <td><strong><p class ="">{this.state.edadc5}</p></strong></td>
                  <td><strong><p class ="">Coffe cup</p></strong></td>
                  <td><strong><input type="text"name="nombre"></input></strong></td>
                  <td><strong> </strong></td>
                  </tr>



                {/* Aqui esta el cambio: Tiago => {this.state.nombre} */}
                <p onClick = {this.cnombre}>{/*this.state.cliente1*/}</p>
               {/* <p class ="">{this.state.cliente1}, Edad{this.state.edad}</p>*/}
                <button onClick = {this.cnombre} >REASIGNAR</button>
                
                </table>
            </div>
        )
    }



}

export default Componente;