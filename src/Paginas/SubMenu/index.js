import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Aindex from '../props/Props';

import '../../App.css';
function    jsx(){
    return<h3>jsx</h3>;
}
function props(){
    return<h3>props</h3>;
}
function states(){
    return<h2 class="states">STATES</h2>;
}
function SubMenu(){
    return(
        <Router>

        <div className={"site-content"}>
        <nav>  
            <ul id="submenu">
           
            <li>
                    <Link to="/jsx">JSX</Link>
                    </li>
                    <li>
                    <Link to="/props">PROPS</Link>
                    </li>
                    <li>
                    <Link to="/states">STATES</Link>
                    </li>
            </ul>
            </nav>
            <Route path="/jsx" component={jsx}/>
        <Route path="../props/Props.js" exact component={props}/>
        <Route path="/states" component={states}/>


        </div>
        </Router>
        
    )
}

export default SubMenu;