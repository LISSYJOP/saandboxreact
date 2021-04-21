import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class Greeting extends React.Component {
    constructor(){ 
        super();
        this.state = {
            name: 'Adriela de Hernández'
          }
}
render(){
    return <h1 class="nombre">Hola, Soy { this.state.name } , ¡Es un gusto saludarte!</h1>
  
}
}
export default Greeting;