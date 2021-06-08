import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="options" to='/shop'>SHOP</Link>
            <Link className="options" to='/shop'>CONTACT</Link>
            {
                currentUser ?
                    <div className="options" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="options" to='/signin'>SIGN IN</Link>
            }

        </div>
    </div>
)

export default Header;