import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {['home', 'about', 'services', 'testimonials', 'contact', 'footer'].map((item, index) => (
          <li key={index} className="nav-item">
            <Link
              to={item}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${hovered === item ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
