import { useState } from 'react'
import './Header.css'

export default function Heading() {
    const [navToggle, setNavToggle] = useState(false);


    return (<header className="main-heading">
        <div className='heading-container'>
            <img src="/images/logo.svg" alt="" />
            <div onClick={() => {
                setNavToggle(!navToggle)
            }} className='mobile-nav-button' data-visible={`${navToggle}`}>
                <img src='/images/icon-hamburger.svg' />
                <img src='/images/icon-close-menu.svg' />
                <span className="visually-hidden">Menu</span>
            </div>
           {/* { navToggle && <div className='nav-dialog'>
                <ul>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </div>} */}

            <nav className='nav-list' data-navToggled={`${navToggle}`}>
                <ul>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </nav>
        </div>

    </header>)
}