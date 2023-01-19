import React, { useState } from 'react';
import "./css/header.css";
import { Link as LinkScroll } from "react-scroll";
import logoImage from "../../assets/images/St    dy.png";
import vImage from "../../assets/images/v.png";
import dashboard from "../../assets/images/dashboard.png";
import shopify from "../../assets/images/shopify.png";
import nearpad from "../../assets/images/nearpad.png";
import bench from "../../assets/images/bench.png";
import forbes from "../../assets/images/forbes.png";
import bumble from "../../assets/images/bumble.png";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
    const [state, setState] = useState(false);
    const showMenu = () => {
        setState(!state)
    }
  return (
    <header>
        <div className="container">
            <div className={`dropdown-menu ${state ? "show" : ""}`} >
                <ul>
                    <li>
                        <LinkScroll to="browser" spy={true} onClick={() => setState(false)}>
                            bROWSER
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="bootcamp" spy={true} onClick={() => setState(false)} offset={-60}>
                            bOOTCAMPS
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="works" spy={true} onClick={() => setState(false)} offset={-60}>
                            hOW it wORKS
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="testemonial" spy={true} onClick={() => setState(false)} offset={-60}>
                            tESTEMONIAL
                        </LinkScroll>
                    </li>
                </ul>
            </div>
            {/* Start Navbar */}
            <nav className="flex">
                <div className="logo">
                    <img src={logoImage} alt="logo" className="main-logo"/>
                    <img src={vImage} alt="vLogo" className="v-image" />
                </div>
                <div className="bars" onClick={showMenu}>
                    <HiBars3 />
                </div>
                <ul className="flex">
                    <li>
                        <LinkScroll to="browser" spy={true}>
                            bROWSER
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="bootcamp" spy={true} offset={-60}>
                            bOOTCAMPS
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="works" spy={true} offset={-60}>
                            hOW it wORKS
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll to="testemonial" spy={true} offset={-60}>
                            tESTEMONIAL
                        </LinkScroll>
                    </li>
                </ul>
                <button className="header-button">About Us</button>
            </nav>

            {/* Start Hero */}
            <div className="hero">
                <div className="hero-container flex">
                    <div className="hero-text">
                        <h3>Advanced Platform</h3>
                        <h1>Take your team to the next level</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                        <button>About Us</button>
                    </div>
                    <div className="dashboard">
                        <img src={dashboard} alt="dashboard" />
                    </div>
                </div>
                <div className="clients flex">
                    <div>
                        <img src={shopify} alt="client" />
                    </div>
                    <div>
                        <img src={nearpad} alt="client" />
                    </div>
                    <div>
                        <img src={bench} alt="client" />
                    </div>
                    <div>
                        <img src={forbes} alt="client" />
                    </div>
                    <div>
                        <img src={bumble} alt="client" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;