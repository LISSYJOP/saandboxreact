import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

function SubMenu(){
    return(
        
        <div>
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
        </div>
        
    )
}

export default SubMenu;