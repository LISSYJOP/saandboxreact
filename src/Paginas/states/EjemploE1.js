import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "JEEP",
            model: "PATRIOT",
            color: "NEGRO",
            year: 2012

        };
    }
    render(){
        return(
            <div>
                
                <h2 class="jeep">Mi Auto es un {this.state.brand}</h2>
                <p class ="jeep">
                    Modelo {this.state.model} , 
                    color { this.state.color }, año
                     { this.state.year }.
                </p>
            </div>
        )
    }
}
export default Car;