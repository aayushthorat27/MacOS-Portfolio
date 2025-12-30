import dayjs from 'dayjs';
import React from 'react'
import { navIcons, navLinks } from '#constants'

// const now = new Date(Date.now());

const Navbar = () => {
  return (
    <nav>
        {/* Left Side portion of Navbar */}
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className='font-bold'>Aayush Thorat's Portfolio</p>
            <ul>
                {navLinks.map(({id, name}) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        {/* Right Side portion of Navbar */}
        <div>
            <ul>
                {navIcons.map(({id, name, src}) => (
                    <li key={id}>
                        <img src={src} className='icon-hover' alt={`icon-${id}`} />
                    </li>
                ))}
                {/* <li>
                    {
                        now.toLocaleDateString([], {weekday: 'short'}) + ' ' +
                        now.toLocaleDateString([], {month: 'short', day: '2-digit'}) + ' ' +
                        now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    }
                </li> */}
                
            </ul>
            <time>{dayjs().format('ddd MMM DD h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar