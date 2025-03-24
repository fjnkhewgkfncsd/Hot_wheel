import React from 'react';
import {Link} from "react-router-dom";
import Tiktok from "../assets/Icons/tiktok-logo-logo-svgrepo-com.svg";
import Facebook from "../assets/Icons/facebook-color-svgrepo-com.svg";
import Linkedin from "../assets/Icons/linkedin-icon-logo-svgrepo-com.svg";
import Twitter from "../assets/Icons/twitter-3-logo-svgrepo-com.svg";
import Instagram from "../assets/Icons/instagram-1-svgrepo-com.svg";
import "../Styles/Footer.css";


const Footer = () => {
    return (
        <footer>
            <div>
                <h4>Compony</h4>
                <ul>
                    <li><Link>About Us</Link></li>
                    <li><Link>Our Service</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Affiliate Program</Link></li>
                </ul>
            </div>
            <div>
                <h4>Get Help</h4>
                <ul>
                    <li>
                        <Link>FAQ</Link>
                    </li>
                    <li>
                        <Link>Shiping</Link>
                    </li>
                    <li>
                        <Link>Returns</Link>
                    </li>
                    <li>
                        <Link>Order Status</Link>
                    </li>
                    <li>
                        <Link>Payment Option</Link>
                    </li>
                </ul>
                
            </div>
            <div>
                <h4>Online Shop</h4>
                <ul>
                    <li>
                        <Link>Club</Link>
                    </li>
                    <li>
                        <Link>Retro</Link>
                    </li>
                    <li>
                        <Link>Nation Team</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link>
                            <img src={Tiktok} alt="Tiktok" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={Twitter} alt="Twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={Facebook} alt="Facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <img src={Linkedin} alt="Linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link><img src={Instagram} alt="Instagram" /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;