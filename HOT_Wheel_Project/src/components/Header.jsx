import React from 'react';
import { Link } from "react-router-dom";
import UserIcon from "../assets/Icons/user-circle-svgrepo-com.svg";
import CartIcon from "../assets/Icons/cart-check-svgrepo-com.svg";
import Favorite from "../assets/Icons/favorite-svgrepo-com.svg";
import "../Styles/Header.css";

const  Header = () =>
{
    return (
        <header>
            <p>KhmerKIts</p>
            <nav>
                <ul>
                    <li><Link>SHOP</Link></li>
                    <li><Link>COLLECTIONS</Link></li>
                    <li><Link>ABOUT</Link></li>
                </ul>
            </nav>
            <div>
                <img src={UserIcon} alt="Account" />
                <img src={CartIcon} alt="Add to Cart" />
                <img src={Favorite} alt="Favorite" />
            </div>
        </header>
    );
}
export default Header;