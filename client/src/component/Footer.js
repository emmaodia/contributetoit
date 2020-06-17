import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faHandHoldingHeart} />
const copyright = <FontAwesomeIcon icon={faCopyright} />

const Footer = () => {

  return (
    <div>
      <ul className="flex justify-between">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="https://fb.com/groups/devclagos" target="_blank">Made with {element} by DevC Lagos Community</a>
        </li>
        <li className="mr-6">
          <p className="text-blue-500 hover:text-blue-800">License Apache-2.0</p>
        </li>
        <li className="mr-6">
          <p className="text-gray-400 cursor-not-allowed" href="#">{copyright} 2020</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

{/* <Navbar color="light" light expand="md">
        <Nav className="center">
        <NavItem>
            <NavLink href="https://fb.com/groups/devclagos" target="_blank">Made with {element} by DevC Lagos Community</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">{copyright} 2020</NavLink>
        </NavItem>
        </Nav>
      </Navbar> */}