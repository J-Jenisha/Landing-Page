import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>
{
    return(
        <div classname='navbar-container'>
            <ul className='ul'>
                <li className='lin'><Link className="links" to={`/signup`}>Home</Link></li>
                <li className='lin'><Link className="links" to={`/signup`}>About Us</Link></li>
                <li className='lin'><Link className="links" to={`/signup`}>Contact</Link></li>
                <button className='btn'><Link className="link" to={`/login`}>Login</Link></button>
                <button className='btn'><Link className="link" to={`/signup`}>Signup</Link></button>
            </ul>
        </div>
    );
}

export default Navbar;
