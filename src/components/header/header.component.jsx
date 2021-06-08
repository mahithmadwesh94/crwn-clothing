import React from 'react';
<<<<<<< HEAD
import { auth } from '../../firebase/firebase.utils'
=======
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'

<<<<<<< HEAD
const Header = ({ currentUser }) => (
=======
const Header = () => (
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="options" to='/shop'>SHOP</Link>
            <Link className="options" to='/shop'>CONTACT</Link>
<<<<<<< HEAD
        {
            currentUser ?
                <div className="options" onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link className="options" to='/signin'>SIGN IN</Link>
        }

=======
            <Link className="options" to='/signin'>SIGN IN</Link>
>>>>>>> ecf177e332d4ac90a1e2a8062e6540b3aa8080b7
    </div>
    </div >
)

export default Header;