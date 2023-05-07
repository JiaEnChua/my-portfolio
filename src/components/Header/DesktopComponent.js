import React from 'react';
import { Link } from 'react-scroll';
import './styles.scss';

function DesktopComponent() {
  return (
    <div className='header'>
      <ul className='header__list'>
        <li>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='experience'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p>Experience</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p>Project</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='footer'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopComponent;
