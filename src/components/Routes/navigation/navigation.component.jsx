import React, {Fragment, useContext} from 'react';
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
import './navigation.styles.scss';
import CartIconComponent from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../card-dropdown/card-dropdown.component'
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase.utils';
import { CartContext } from '../../../contexts/cart.context';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'> 
                    <Link className='nav-link' to="/shop"> SHOP</Link>
                    {
                        currentUser ? 
                       ( <span className='nav-link' onClick={signOutUser}>LOG OUT</span>)
                        : (
                            <Link className='nav-link' to="/auth"> SIGN IN</Link>
                        )
                    }
                    <CartIconComponent/>
                </div>
                { isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    );
  };
export default Navigation;
