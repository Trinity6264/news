import React, {  useState } from 'react'
import './style/Header.css'
import Logo from '../assets/images/logo.svg'
import MenuIcon from '../assets/images/icon-menu.svg'
import CloseIcon from '../assets/images/icon-menu-close.svg'
import { Link } from 'react-router-dom'
const Header = () => {
    const [isOpen, setOpen] = useState(false);





    const openNavbar = () => {
        setOpen(true);
    }
    const closeNavbar = () => {
        setOpen(false);
    }

    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'New',
            path: '/new'
        },
        {
            name: 'Popular',
            path: '/popular'
        },
        {
            name: 'Trending',
            path: '/trending'
        },
        {
            name: 'Categories',
            path: '/categories'
        },
    ]

    return (
        <>
            <header>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="menu-btn-wrapper" >
                    <img src={MenuIcon} alt="menu icon" onClick={openNavbar} />
                </div>
                <ul className="tablet-nav-menu-links">
                    <nav>
                        {
                            navLinks.map(({ name, path }) => {
                                return (<Link to={path} key='name'>{name}
                                </Link>)

                            },
                            )}
                    </nav>

                </ul>
            </header>
            <div className="nav-wrapper" style={{
                left: isOpen ? '0%' : '150%'
            }}>
                <div className="dim-container">

                </div>
                <ul className="nav-menu-links">
                    <div className="close-btn-wrapper">
                        <img src={CloseIcon} alt="menu icon" onClick={closeNavbar} />
                    </div>
                    <nav>
                        {
                            navLinks.map(({ name, path }) => {

                                return (<Link onClick={closeNavbar} to={path} key='name'>{name}
                                </Link>)

                            },
                            )}
                    </nav>

                </ul>
            </div>
        </>
    )
}

export default Header