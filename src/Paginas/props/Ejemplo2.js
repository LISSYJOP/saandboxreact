import React, { Children, Component } from 'react';

class Parent extends Component{
render() {
    return(
        <div>
            <h3 class="total">Total Hijos: { Children.count(this.props.children) }</h3>
            {this.props.children}
        </div>
    )
}

}

export default Parent;